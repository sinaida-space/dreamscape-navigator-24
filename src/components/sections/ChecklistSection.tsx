import SectionHeader from "../SectionHeader";
import TerminalCard from "../TerminalCard";
import { useState } from "react";
import { motion } from "framer-motion";

const phases = [
  {
    name: "01 ДИАГНОЗ",
    items: [
      "Задача сформулирована в одном предложении",
      "Применено 5 Почему — найден корень, не симптом",
      "Понятно: для кого, к какому моменту, как оценим",
    ],
  },
  {
    name: "02 РАСШИРЕНИЕ",
    items: [
      "Сгенерировано минимум 20 идей без оценки",
      "Использован хотя бы один нестандартный метод",
      "Зафиксировано всё, включая «дурацкие» идеи",
    ],
  },
  {
    name: "03 ФОКУС",
    items: [
      "Отобрано 3–5 вариантов по явным критериям",
      "Финалисты проверены через 6 Шляп",
      "Выбрана одна идея для прототипа",
    ],
  },
  {
    name: "04 ПРОТОТИП",
    items: [
      "Прототип создан за ограниченное время",
      "Показан минимум 2 людям без объяснений",
      "Зафиксирована реакция: что считалось, что нет",
    ],
  },
  {
    name: "05 ВАУ-ДОВОДКА",
    items: [
      "Найден элемент неожиданности",
      "Убрано всё, что не усиливает главную идею",
      "Финал проверен на соответствие задаче из фазы 01",
    ],
  },
];

export default function ChecklistSection() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const total = phases.reduce((s, p) => s + p.items.length, 0);
  const done = checked.size;

  return (
    <section className="section-spacing max-w-5xl mx-auto">
      <SectionHeader
        number="06"
        title="Чеклист"
        subtitle="Прогони задачу насквозь. Отмечайте пункты — это часть процесса."
        glowColor="secondary"
      />

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between font-mono text-xs text-muted-foreground mb-2">
          <span>Прогресс</span>
          <span className="text-terminal-green">{done}/{total}</span>
        </div>
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            animate={{ width: `${(done / total) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phases.map((phase) => (
          <TerminalCard key={phase.name} title={phase.name.toLowerCase().replace(/ /g, "_")} variant="glow">
            <div className="space-y-3">
              <h3 className="font-mono text-xs text-primary uppercase tracking-wider">{phase.name}</h3>
              {phase.items.map((item) => {
                const key = `${phase.name}-${item}`;
                const isChecked = checked.has(key);
                return (
                  <label
                    key={key}
                    className="flex items-start gap-3 cursor-pointer group"
                    onClick={() => toggle(key)}
                  >
                    <span className={`mt-0.5 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-all
                      ${isChecked ? "bg-primary border-primary" : "border-muted-foreground/30 group-hover:border-primary/50"}`}>
                      {isChecked && <span className="text-primary-foreground text-[10px]">✓</span>}
                    </span>
                    <span className={`text-sm transition-all ${isChecked ? "text-muted-foreground line-through" : "text-foreground/80"}`}>
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>
          </TerminalCard>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center font-mono text-sm text-muted-foreground italic"
      >
        «Метод — это разрешение думать иначе.»
        <span className="block mt-1 text-primary not-italic">— sin.ai.da</span>
      </motion.p>
    </section>
  );
}
