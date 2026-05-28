type Props = {
  kicker?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  kicker,
  title,
  lead,
  align = "center"
}: Props) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      {kicker && <div className="kicker">{kicker}</div>}
      <h2 className="mt-2 font-display text-[clamp(28px,4vw,42px)] leading-tight">
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-lg opacity-90 ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
