import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  glowColor?: "primary" | "secondary" | "accent";
}

const glowClasses = {
  primary: "text-glow",
  secondary: "text-glow-secondary",
  accent: "text-glow-accent",
};

export default function SectionHeader({ number, title, subtitle, glowColor = "primary" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mb-12 md:mb-16"
    >
      <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
        {number}
      </span>
      <h2 className={`font-display text-3xl md:text-5xl font-bold mt-3 ${glowClasses[glowColor]}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg mt-3 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
