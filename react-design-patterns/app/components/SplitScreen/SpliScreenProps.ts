import { ReactNode } from "react";

export type SplitScreenProps = {
  left: ReactNode;
  right: ReactNode;
} & Partial<{
  leftWidth: number;
  rightWidth: number;
}>;
