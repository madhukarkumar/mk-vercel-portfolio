import { cn } from "@/lib/utils"
import React from "react"

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

export const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid gap-4 md:auto-rows-[20rem]", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
BentoGrid.displayName = "BentoGrid"

export interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  title: string
  description: React.ReactNode
  header: React.ReactNode
  icon: React.ReactNode
}

export const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ className, title, description, header, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4", className)}
        {...props}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {icon}
            <span className="ml-2">{title}</span>
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    )
  }
)
BentoGridItem.displayName = "BentoGridItem"

