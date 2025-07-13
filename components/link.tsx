import { PropsWithChildren } from "react";

type LinkProps = PropsWithChildren<{
  to: string;
  external?: boolean;
}>;

export default function Link({ to, external, children }: LinkProps) {
  return (
    <a href={to} target={external ? "_blank" : "_self"} className="text-black hover:text-[#ff3700]">
      {children}
    </a>
  );
}
