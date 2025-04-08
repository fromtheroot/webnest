'use client';

import React from "react";
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Code,
  Palette,
  Layout,
  Sparkles,
  Component,
  Layers,
} from "lucide-react";

// Utility function for class name merging
const cn = (...classes: (string | boolean | undefined | null | Record<string, boolean>)[]): string => {
  return classes
    .filter(Boolean)
    .map((c) => {
      if (typeof c === "object" && c !== null) {
        return Object.entries(c)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return c;
    })
    .flat()
    .join(" ");
};

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  rowSpan?: number;
  hasPersistentHover?: boolean;
  action?: () => void;
}

interface BentoGridProps {
  items?: BentoItem[];
  className?: string;
}

function BentoGrid({ items = [], className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
            "border border-border bg-background text-foreground",
            "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
            "hover:-translate-y-0.5 will-change-transform cursor-pointer",
            "col-span-1",
            item.colSpan === 2 ? "md:col-span-2" : "",
            item.rowSpan === 2 ? "md:row-span-2" : "",
            {
              "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5": Boolean(item.hasPersistentHover),
              "dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]": Boolean(item.hasPersistentHover),
            }
          )}
          onClick={item.action}
        >
          <div
            className={`absolute inset-0 ${
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-300`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
                {item.icon}
              </div>
              {item.status && (
                <span
                  className={cn(
                    "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                    "bg-black/5 dark:bg-white/10 text-foreground/80",
                    "transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20"
                  )}
                >
                  {item.status}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-foreground tracking-tight text-[15px]">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs text-foreground/60 font-normal">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm text-foreground/80 leading-snug font-[425]">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex flex-wrap gap-2 text-xs text-foreground/60">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.cta || "Explore →"}
              </span>
            </div>
          </div>

          <div
            className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 ${
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-300`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const items: BentoItem[] = [
    {
      title: "Next.js 14",
      meta: "App Router",
      description: "Experience the power of React Server Components and the App Router with blazing-fast performance",
      icon: <Sparkles className="w-4 h-4 text-blue-500" />,
      status: "Latest",
      tags: ["React", "Server Components"],
      colSpan: 2,
      hasPersistentHover: true,
      action: () => toast.success('Next.js is awesome!'),
    },
    {
      title: "shadcn/ui",
      meta: "Components",
      description: "Beautiful, accessible, and customizable components built with Radix UI and Tailwind CSS",
      icon: <Component className="w-4 h-4 text-emerald-500" />,
      status: "Updated",
      tags: ["UI", "Accessible"],
      action: () => window.open('https://ui.shadcn.com', '_blank'),
    },
    {
      title: "TailwindCSS",
      meta: "v3.0",
      description: "A utility-first CSS framework for rapid UI development with complete customization control",
      icon: <Palette className="w-4 h-4 text-purple-500" />,
      tags: ["Styling", "Utilities"],
      action: () => window.open('https://tailwindcss.com', '_blank'),
    },
    {
      title: "TypeScript",
      meta: "Type-Safe",
      description: "Write more reliable code with static typing and modern JavaScript features",
      icon: <Code className="w-4 h-4 text-sky-500" />,
      status: "Stable",
      tags: ["Development", "Types"],
      colSpan: 2,
    },
    {
      title: "Modern Stack",
      meta: "Full-Stack",
      description: "Built with the latest web technologies for optimal developer experience",
      icon: <Layers className="w-4 h-4 text-orange-500" />,
      tags: ["Development", "Stack"],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-4 relative overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 blur-xl scale-110"
        >
          <source src="/videos/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="w-full max-w-7xl mx-auto space-y-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Next.js Starter</h1>
          <p className="text-lg text-muted-foreground mt-2">
            A modern template with Next.js, shadcn/ui, and TailwindCSS
          </p>
        </div>

        <BentoGrid items={items} />
      </div>
    </div>
  );
}
