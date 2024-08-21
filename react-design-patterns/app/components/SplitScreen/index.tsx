import { Container } from "./Container";
import { Panel } from "./Panel";
import { SplitScreenProps } from "./SpliScreenProps";

export function SplitScreen({ left, right }: SplitScreenProps) {
  return (
    <Container>
      <Panel>{left}</Panel>
      <Panel>{right}</Panel>
    </Container>
  );
}
