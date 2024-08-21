import { PanelProps } from "./PanelProps";

export function Panel({ children }: PanelProps) {
  return <div className="flex-1">{children}</div>;
}
