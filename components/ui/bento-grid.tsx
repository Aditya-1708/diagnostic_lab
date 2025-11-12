import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Grid container
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Card layout
        "group/bento relative flex flex-col justify-between rounded-2xl border border-purple-100 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/90",
        className
      )}
    >
      {/* Header (image or animation) */}
      <div className="relative w-full h-40 overflow-hidden rounded-xl">
        {header}
      </div>

      {/* Content */}
      <div className="pt-3 transition-transform duration-300 group-hover/bento:translate-x-1">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
            {title}
          </h3>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};
