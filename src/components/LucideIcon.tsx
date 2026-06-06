import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps extends Omit<React.ComponentProps<"svg">, "ref"> {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className, size = 24, ...props }: LucideIconProps) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    // Default fallback icon
    return <Icons.Heart className={className} size={size} {...props} />;
  }
  return <IconComponent className={className} size={size} {...props} />;
}
