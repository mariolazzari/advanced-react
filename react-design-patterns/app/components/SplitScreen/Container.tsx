import { ContainerProps } from "./ContainerProps";

export function Container({ children }: ContainerProps) {
  return <div className="container flex">{children}</div>;
}
