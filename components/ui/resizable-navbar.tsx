"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

// Interfaces unchanged...
interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}
interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 60);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-4 z-50 w-full pointer-events-auto", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(12px)" : "none",
      backgroundColor: visible ? "rgba(255,255,255,0.85)" : "transparent",
      boxShadow: visible
        ? "0 8px 30px rgba(0,0,0,0.05), 0 0 0 1px rgba(135,206,250,0.15)"
        : "none",
      y: visible ? 8 : 0,
    }}
    transition={{ type: "spring", stiffness: 250, damping: 30 }}
    className={cn(
      "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full px-6 py-3 lg:flex",
      "border border-sky-100/60 dark:border-cyan-900/40 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-lg",
      className
    )}
  >
    {children}
  </motion.div>
);

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-row items-center justify-center gap-6 text-base font-medium transition duration-200 text-gray-700 dark:text-gray-300",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          onClick={onItemClick}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-3 py-2 transition-all hover:text-sky-600 dark:hover:text-cyan-400"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hover-underline"
              className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full"
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

// Mobile nav (same structure, polished visuals)
export const MobileNav = ({ children, className, visible }: MobileNavProps) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(12px)" : "none",
      backgroundColor: visible ? "rgba(255,255,255,0.8)" : "transparent",
      y: visible ? 8 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 40 }}
    className={cn(
      "relative z-50 mx-auto flex w-full flex-col items-center justify-between px-4 py-2 lg:hidden",
      className
    )}
  >
    {children}
  </motion.div>
);

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "absolute top-16 left-0 w-full flex flex-col gap-4 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-t border-sky-100/50 dark:border-cyan-900/50 px-6 py-8 shadow-md",
          className
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button onClick={onClick} className="p-2 rounded-full hover:bg-sky-100/40 transition">
    {isOpen ? (
      <IconX className="text-sky-600 dark:text-cyan-400" />
    ) : (
      <IconMenu2 className="text-sky-600 dark:text-cyan-400" />
    )}
  </button>
);

export const NavbarLogo = () => (
  <a href="#" className="flex items-center gap-2">
    <img src="/logo.jpeg" alt="logo" width={30} height={30} />
    <span className="font-semibold text-lg bg-linear-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
      Tathagat Labs
    </span>
  </a>
);
