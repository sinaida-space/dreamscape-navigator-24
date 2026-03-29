import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";

const phases = [
  {
    id: "01",
    name: "ДИАГНОЗ",
    desc: "Сформулируйте задачу в одном предложении. Задайте «А это точно та задача?» Примените 5 Почему.",
    tools: "5 Почему · JTBD · Вопрос «для кого?»",
    color: "primary",
  },
  {
    id: "02",
    name: "РАСШИРЕНИЕ",
    desc: "Минимум 20 идей без оценки. Запрещено говорить «это не работает» до конца фазы.",
    tools: "Mind Map · SCAMPER · Обратный брейнсторм · Аналогии",
    color: "secondary",
  },
  {
    id: "03",
    name: "ФОКУС",
    desc: "Отберите 3–5 идей по критериям: оригинальность, реализуемость, резонанс. 6 Шляп на финалистов.",
    tools: "6 Шляп · Constraint Design · Матрица оценки",
    color: "accent",
  },
  {
    id: "04",
    name: "ПРОТОТИП",
    desc: "Грубый прототип за 30–60 минут. Покажите 2–3 людям без объяснений. Фиксируйте реакцию.",
    tools: "Prototyping Loop · JTBD · «Что считалось?»",
    color: "secondary",
  },
  {
    id: "05",
    name: "ВАУ-ДОВОДКА",
    desc: "Найдите элемент неожиданности. Уберите всё, что не усиливает основную идею. Вау — это точность.",
    tools: "Принцип «убери одно» · Все методы · Тест на одно предложение",
    color: "primary",
  },
];

const colorMap: Record<string, string> = {
  primary: "border-primary/30 text-primary",
  secondary: "border-secondary/30 text-secondary",
  accent: "border-accent/30 text-accent",
};

const dotColor: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

export default function PhasesSection() {
  return (
    <section className="section-spacing max-w-4xl mx-auto">
      <SectionHeader
        number="04"
        title="5 фаз процесса"
        subtitle="От хаоса к продукту. Процесс нелинеен — но фазы дают ориентиры."
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-accent/40" />

        <div className="space-y-8">
          {phases.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Dot on line */}
              <div className={`absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full ${dotColor[p.color]} shadow-[0_0_10px_currentColor]`} />

              <div className={`glass rounded-lg p-5 border ${colorMap[p.color].split(' ')[0]}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`font-mono text-xs ${colorMap[p.color].split(' ')[1]}`}>{p.id}</span>
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-3 tracking-wider uppercase">
                  {p.tools}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center font-mono text-sm text-muted-foreground italic"
      >
        «Вау-продукт — это не продукт с максимумом функций. Это продукт, где убрано всё лишнее.»
        <span className="block mt-1 text-primary not-italic">— Dieter Rams</span>
      </motion.blockquote>
    </section>
  );
}
