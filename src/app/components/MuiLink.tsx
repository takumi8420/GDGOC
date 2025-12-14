"use client";

import Link from "next/link";
import { forwardRef } from "react";

// MUIのcomponent propで使用するためのLinkラッパー
const MuiLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>((props, ref) => {
  return <Link ref={ref} {...props} />;
});

MuiLink.displayName = "MuiLink";

export default MuiLink;

