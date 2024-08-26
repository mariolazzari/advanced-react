import { Container } from "./Container";
import { Panel } from "./Panel";
import { SplitScreenProps } from "./SpliScreenProps";

export function SplitScreen({
  left,
  right,
  leftWidth = 1,
  rightWidth = 3,
}: SplitScreenProps) {
  return (
    <Container>
      <Panel width={leftWidth}>{left}</Panel>
      <Panel width={rightWidth}>{right}</Panel>
    </Container>
  );
}
