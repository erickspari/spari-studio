"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

const MAILTO = "info@sparistudio.com";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const t = useTranslations("contact");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    if (!formspreeId) {
      const subject = encodeURIComponent(
        `${t("mailtoSubject")} ${fd.get("company") || "contact"}`
      );
      const body = encodeURIComponent(
        `${t("formName")}: ${fd.get("name")}\n${t("formCompany")}: ${fd.get("company")}\n${t("formEmail")}: ${fd.get("email")}\n${t("formPhone")}: ${fd.get("phone") || "-"}\n\n${t("formMessage")}:\n${fd.get("message")}`
      );
      window.location.href = `mailto:${MAILTO}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(
          data?.errors?.[0]?.message || t("formErrorRetry")
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(t("formErrorNetwork"));
    }
  }

  if (status === "success") {
    return (
      <div className="card-light">
        <h3 className="font-display text-xl font-extrabold">{t("formSuccessTitle")}</h3>
        <p className="mt-2 text-[15px]">
          {t("formSuccessBody")}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn mt-5"
        >
          {t("formSuccessReset")}
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy/40 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30";

  return (
    <form onSubmit={onSubmit} className="card-light space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-extrabold">{t("formName")} *</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className={field}
            placeholder={t("formNamePlaceholder")}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-extrabold">{t("formCompany")}</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            className={field}
            placeholder={t("formCompanyPlaceholder")}
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-extrabold">{t("formEmail")} *</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className={field}
            placeholder={t("formEmailPlaceholder")}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-extrabold">{t("formPhone")}</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={field}
            placeholder={t("formPhonePlaceholder")}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-extrabold">{t("formMessage")} *</span>
        <textarea
          required
          name="message"
          rows={5}
          className={field}
          placeholder={t("formMessagePlaceholder")}
        />
      </label>

      {/* Honeypot anti-bot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn disabled:opacity-60"
        >
          {status === "submitting" ? t("formSubmitting") : t("formSubmit")}
        </button>
        <a
          href={`mailto:${MAILTO}`}
          className="text-sm font-extrabold text-navy underline underline-offset-4 hover:text-blue"
        >
          {t("formDirectLink")} {MAILTO}
        </a>
      </div>

      {!formspreeId && (
        <p className="pt-2 text-xs opacity-70">
          {t("formConfigNote")}{" "}
          <code className="rounded bg-navy/5 px-1 py-0.5">NEXT_PUBLIC_FORMSPREE_ID</code>{" "}
          dans <code className="rounded bg-navy/5 px-1 py-0.5">.env.local</code>.
        </p>
      )}
    </form>
  );
}
