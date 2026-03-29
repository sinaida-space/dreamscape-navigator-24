import SectionHeader from "../SectionHeader";
import TerminalCard from "../TerminalCard";
import { motion } from "framer-motion";

const tools = [
  { id: "01", name: "5 ПОЧЕМУ", cat: "ДИАГНОСТИКА", mode: "✎", desc: "Задайте «почему?» пять раз подряд. На 4–5 итерации вскрывается корень, а не симптом.", when: "Кажется, что знаете причину, но решения не работают" },
  { id: "02", name: "6 ШЛЯП DE BONO", cat: "ПЕРСПЕКТИВЫ", mode: "✎ + ⬡", desc: "Шесть режимов мышления: факты → эмоции → риски → оптимизм → идеи → процесс.", when: "Застряли в одном режиме оценки" },
  { id: "03", name: "ОБРАТНЫЙ БРЕЙНСТОРМ", cat: "ИНВЕРСИЯ", mode: "✎", desc: "«Как гарантированно провалить задачу?» — переверните каждый пункт провала в решение.", when: "Классический брейнсторм даёт скучные идеи" },
  { id: "04", name: "SCAMPER", cat: "ТРАНСФОРМАЦИЯ", mode: "⬡", desc: "7 линз: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse.", when: "Есть прототип — нужны вариации" },
  { id: "05", name: "MIND MAP", cat: "РАЗВЁРТЫВАНИЕ", mode: "✎", desc: "Центральная идея → ветви ассоциаций → подветви деталей. Скорость важнее порядка.", when: "Нужно выгрузить всё перед началом работы" },
  { id: "06", name: "CONSTRAINT DESIGN", cat: "ОГРАНИЧЕНИЯ", mode: "⬡", desc: "Добавьте искусственные ограничения: только чёрный, без слов, за 10 минут. Ограничение — генератор.", when: "Слишком много свободы парализует" },
  { id: "07", name: "ANALOGICAL THINKING", cat: "АНАЛОГИИ", mode: "⬡", desc: "Перенесите принцип решения из другой области: природа, архитектура, театр, кулинария.", when: "Нужен нестандартный образ" },
  { id: "08", name: "JOBS TO BE DONE", cat: "МОТИВ", mode: "⬡", desc: "Три уровня: функциональная, эмоциональная, социальная работа продукта.", when: "Работаете над продуктом для аудитории" },
  { id: "09", name: "PROTOTYPING LOOP", cat: "ИТЕРАЦИИ", mode: "✎ + ⬡", desc: "Грубый прототип за 30 минут → показать без объяснений → фиксировать реакцию → итерировать.", when: "Есть концепт, но нет уверенности" },
];

const modeColor = (mode: string) => {
  if (mode === "✎") return "text-glow-warm";
  if (mode === "⬡") return "text-secondary";
  return "text-primary";
};

export default function ToolsSection() {
  return (
    <section className="section-spacing max-w-6xl mx-auto">
      <SectionHeader
        number="02"
        title="9 инструментов мышления"
        subtitle="Каждый метод решает свою задачу. Не нужно применять все — нужно знать, когда какой."
        glowColor="secondary"
      />

      <div className="flex flex-wrap gap-3 mb-10 font-mono text-xs">
        <span className="px-3 py-1.5 rounded-full border border-glow-warm/30 text-glow-warm">✎ Карандаш</span>
        <span className="px-3 py-1.5 rounded-full border border-secondary/30 text-secondary">⬡ LLM</span>
        <span className="px-3 py-1.5 rounded-full border border-primary/30 text-primary">✎ + ⬡ Оба</span>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {tools.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <TerminalCard title={`tool_${t.id}`} variant={i % 4 === 0 ? "secondary" : "default"}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{t.cat}</span>
                  <span className={`font-mono text-xs ${modeColor(t.mode)}`}>{t.mode}</span>
                </div>
                <h3 className="font-display text-base font-bold">{t.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{t.desc}</p>
                <p className="font-mono text-[11px] text-terminal-green border-t border-border/30 pt-2">
                  КОГДА: {t.when}
                </p>
              </div>
            </TerminalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
