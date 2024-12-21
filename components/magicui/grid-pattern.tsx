"use client";

import { cn } from "@/lib/utils";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width: number;
  height: number;
  x?: number;
  y?: number;
  strokeDasharray?: string;
}

export default function GridPattern({
  width,
  height,
  x = 0,
  y = 0,
  strokeDasharray,
  className,
  ...props
}: GridPatternProps) {
  return (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      {...props}
    >
      <defs>
        <pattern
          id="grid"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M ${width} 0 L 0 0 0 ${height}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
