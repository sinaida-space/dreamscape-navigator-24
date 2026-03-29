import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Начало" },
  { id: "blockers", label: "Блокеры" },
  { id: "tools", label: "Инструменты" },
  { id: "pencil-llm", label: "✎ vs ⬡" },
  { id: "phases", label: "5 фаз" },
  { id: "matrix", label: "Матрица" },
  { id: "checklist", label: "Чеклист" },
  { id: "ai", label: "AI" },
  { id: "footer", label: "∞" },
];

export default function NavigationDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-2 justify-end"
          title={s.label}
        >
          <span className="font-mono text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            {s.label}
          </span>
          <motion.span
            className={`block rounded-full transition-all ${
              i === active ? "w-2.5 h-2.5 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]" : "w-1.5 h-1.5 bg-muted-foreground/30 group-hover:bg-primary/50"
            }`}
            layout
          />
        </a>
      ))}
    </nav>
  );
}
