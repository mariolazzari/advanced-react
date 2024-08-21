import { SectionProps } from "./SectionProps";

export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-3xl capitalize">{title}</h2>
      {children}
    </section>
  );
}
