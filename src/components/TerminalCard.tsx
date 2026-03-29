import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalCardProps {
  title?: string;
  children: ReactNode;
  variant?: "default" | "glow" | "accent" | "secondary";
  className?: string;
}

const variantStyles = {
  default: "terminal-border",
  glow: "terminal-border border-glow",
  accent: "border border-accent/20 shadow-[0_0_20px_hsl(var(--glow-accent)/0.1)]",
  secondary: "border border-secondary/20 shadow-[0_0_20px_hsl(var(--glow-secondary)/0.1)]",
};

export default function TerminalCard({ title, children, variant = "default", className = "" }: TerminalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`glass rounded-lg overflow-hidden ${variantStyles[variant]} ${className}`}
    >
      {title && (
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-glow-warm/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-terminal-green/60" />
          </div>
          <span className="font-mono text-xs text-muted-foreground ml-2">{title}</span>
        </div>
      )}
      <div className="p-5 md:p-6">{children}</div>
    </motion.div>
  );
}
