import { PanelProps } from "./PanelProps";

export function Panel({ children, width = 1 }: PanelProps) {
  return <div style={{ flex: width }}>{children}</div>;
}
