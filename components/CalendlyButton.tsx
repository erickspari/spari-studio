"use client";

import { useEffect } from "react";
import { CALENDLY_URL } from "@/config/links";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

type Props = {
  label: string;
  className?: string;
};

export default function CalendlyButton({ label, className = "btn" }: Props) {
  useEffect(() => {
    // Load Calendly CSS once
    const cssId = "calendly-widget-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    // Load Calendly JS once
    const jsId = "calendly-widget-js";
    if (!document.getElementById(jsId)) {
      const script = document.createElement("script");
      script.id = jsId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  function handleClick() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback si le script n'est pas encore chargé
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
}
