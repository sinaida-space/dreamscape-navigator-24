import SectionHeader from "../SectionHeader";
import TerminalCard from "../TerminalCard";
import { motion } from "framer-motion";

const protocols = [
  {
    id: "01",
    title: "LLM КАК ЗЕРКАЛО, НЕ КАК АВТОР",
    principle: "LLM генерирует статистически вероятный ответ — не ваш.",
    rules: [
      "Сначала сформулируйте свою мысль — пусть даже плохо",
      "Используйте LLM для расширения, не для создания с нуля",
      "Никогда не копируйте без обработки через собственное суждение",
    ],
  },
  {
    id: "02",
    title: "НЕСОГЛАСИЕ КАК НАВЫК",
    principle: "Если вы никогда не спорите с ответом LLM — вы не автор.",
    rules: [
      "Спросите: «Почему я соглашаюсь?»",
      "Спорьте с конкретными пунктами",
      "Если всё кажется правильным — это красный флаг",
    ],
  },
  {
    id: "03",
    title: "ФИЛЬТР КОНТЕКСТА",
    principle: "LLM не знает вашего контекста, вашей интуиции о том, что «правильно».",
    rules: [
      "Каждый ответ — сырой материал для вашей переработки",
      "Добавляйте контекст итеративно",
      "Лучший промпт = точное описание вашей уникальной ситуации",
    ],
  },
];

export default function AISection() {
  return (
    <section className="section-spacing max-w-5xl mx-auto">
      <SectionHeader
        number="07"
        title="AI как соавтор"
        subtitle="Протоколы работы, где думаешь ты. LLM генерирует. Вы решаете."
        glowColor="secondary"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-lg terminal-border p-6 mb-8 text-center"
      >
        <p className="font-mono text-sm text-terminal-green text-glow-terminal leading-relaxed max-w-2xl mx-auto">
          Разница между творцом, который использует AI, и человеком, которого использует AI — это наличие несогласия.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {protocols.map((p, i) => (
          <TerminalCard key={p.id} title={`protocol_${p.id}`} variant={i === 1 ? "secondary" : "default"}>
            <div className="space-y-4">
              <div>
                <span className="font-mono text-xs text-secondary">{p.id}</span>
                <h3 className="font-display text-sm font-bold mt-1 leading-snug">{p.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground italic border-l-2 border-secondary/20 pl-3">{p.principle}</p>
              <ul className="space-y-2">
                {p.rules.map((r, j) => (
                  <li key={j} className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-secondary mt-0.5">▸</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </TerminalCard>
        ))}
      </div>
    </section>
  );
}
