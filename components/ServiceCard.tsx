import Icon from "./Icon";

type IconName = Parameters<typeof Icon>[0]["name"];

type ServiceCardProps = {
  icon?: IconName;
  title: string;
  description: string;
  variant?: "dark" | "light";
  label?: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  variant = "light",
  label
}: ServiceCardProps) {
  const cls = variant === "light" ? "card-light" : "card-dark";
  return (
    <article className={cls}>
      {icon && (
        <div className="service-icon" aria-hidden>
          <Icon name={icon} />
        </div>
      )}
      {label && <div className="kicker mb-2">{label}</div>}
      <h3 className="font-display text-xl font-extrabold leading-tight">{title}</h3>
      <p className={`mt-3 text-[15px] ${variant === "dark" ? "text-muted" : "opacity-90"}`}>{description}</p>
    </article>
  );
}
