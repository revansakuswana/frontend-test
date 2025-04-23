import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium text-sm hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full transition duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
        secondary: "bg-transparent text-black",
        third:
          "bg-[var(--color-gray)] hover:bg-[var(--color-gray-dark)] text-black",
      },
      size: {
        default: "px-[18px] py-[10px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export default function Button({
  className,
  variant,
  size,
  href,
  ...props
}: Readonly<ButtonProps>) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
