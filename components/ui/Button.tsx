import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base = "btn " + (variant === "primary" ? "btn-primary" : "btn-outline");
  return <button className={`${base} ${className}`} {...props} />;
}
