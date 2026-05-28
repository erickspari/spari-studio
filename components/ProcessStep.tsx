import Icon from "./Icon";

type ProcessStepProps = {
  num: number;
  title: string;
  description: string;
  icon?: Parameters<typeof Icon>[0]["name"];
};

export default function ProcessStep({ num, title, description, icon }: ProcessStepProps) {
  return (
    <article className="card-light relative text-center">
      <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-navy font-extrabold text-white shadow-card">
        {icon ? <Icon name={icon} className="h-6 w-6 text-gold" /> : num}
      </div>
      <div className="mx-auto mb-3 grid h-8 w-8 place-items-center rounded-full bg-gold text-sm font-black text-ink">
        {num}
      </div>
      <h3 className="font-display text-lg font-extrabold">{title}</h3>
      <p className="mt-2 text-[15px] opacity-90">{description}</p>
    </article>
  );
}
