import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";

const rows = [
  { symptom: "Не знаю, в чём проблема", type: "Любой", method: "5 Почему", mode: "✎" },
  { symptom: "Идеи очевидны и скучны", type: "Любой", method: "Обратный брейнсторм", mode: "✎" },
  { symptom: "Нет идей вообще", type: "Визуальный / Арт", method: "Mind Map + Аналогии", mode: "✎ + ⬡" },
  { symptom: "Есть идея, нужны вариации", type: "Продуктовый / UX", method: "SCAMPER", mode: "⬡" },
  { symptom: "Команда не договаривается", type: "Любой", method: "6 Шляп", mode: "✎ + ⬡" },
  { symptom: "Слишком много свободы", type: "Концептуальный", method: "Constraint Design", mode: "⬡" },
  { symptom: "Не понимаю аудиторию", type: "Продуктовый / UX", method: "JTBD", mode: "⬡" },
  { symptom: "Нужен нестандартный образ", type: "Визуальный / Арт", method: "Analogical Thinking", mode: "⬡" },
  { symptom: "Работает ли идея?", type: "Любой", method: "Prototyping Loop", mode: "✎ + ⬡" },
];

export default function MatrixSection() {
  return (
    <section className="section-spacing max-w-5xl mx-auto">
      <SectionHeader
        number="05"
        title="Матрица выбора"
        subtitle="Симптом → метод. Найдите свою ситуацию и выберите инструмент."
        glowColor="accent"
      />

      <div className="glass rounded-lg terminal-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left p-4 font-mono text-xs text-primary uppercase tracking-wider">Симптом</th>
              <th className="text-left p-4 font-mono text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell">Тип</th>
              <th className="text-left p-4 font-mono text-xs text-secondary uppercase tracking-wider">Метод</th>
              <th className="text-center p-4 font-mono text-xs text-accent uppercase tracking-wider">Режим</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-border/20 hover:bg-primary/5 transition-colors"
              >
                <td className="p-4 text-foreground/80">{r.symptom}</td>
                <td className="p-4 text-muted-foreground text-xs hidden md:table-cell">{r.type}</td>
                <td className="p-4 font-mono text-xs text-secondary">{r.method}</td>
                <td className="p-4 text-center font-mono text-xs text-accent">{r.mode}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
