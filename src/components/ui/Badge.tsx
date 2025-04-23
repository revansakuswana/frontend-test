import * as React from "react";

type BadgeProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="absolute -top-4 -right-6 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
      {children}
    </span>
  );
}
