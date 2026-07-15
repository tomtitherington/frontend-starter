import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-8 w-full min-w-0 rounded-sm border border-input bg-background px-2.5 py-1 text-sm text-foreground transition-colors outline-none",
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "file:text-foreground file:text-sm file:font-medium file:border-0 file:bg-transparent",
        "focus-visible:ring-ring focus-visible:ring-[2px] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };
