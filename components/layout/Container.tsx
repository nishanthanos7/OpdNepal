import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
} as const;

export function Container({
  children,
  className = "",
  size = "lg",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${sizes[size]} px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
