import { ReactNode } from "react";

export type PanelProps = {
  children: ReactNode;
} & Partial<{
  width: number;
  flex: number;
}>;
