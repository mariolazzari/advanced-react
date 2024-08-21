import { Section } from "./components/Section";
import { SplitScreen } from "./components/SplitScreen";

export default function Home() {
  const LeftComponent = <h2 className="text-lg bg-red-500 p-2">I'm left</h2>;
  const RightComponent = <h2 className="text-lg bg-sky-700 p-2">I'm right</h2>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title="Layout design pattern">
        <SplitScreen left={LeftComponent} right={RightComponent} />
      </Section>
    </main>
  );
}
