import SectionHeader from "../SectionHeader";
import TerminalCard from "../TerminalCard";
import { motion } from "framer-motion";

export default function PencilVsLLMSection() {
  return (
    <section className="section-spacing max-w-5xl mx-auto">
      <SectionHeader
        number="03"
        title="Карандаш vs LLM"
        subtitle="Оба режима ценны — важно не смешивать их без умысла."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <TerminalCard title="pencil.mode" variant="default">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-glow-warm">✎ Карандаш</h3>
            <p className="text-sm text-muted-foreground">Задействует моторику и пространственное мышление</p>
            <div className="space-y-3">
              {[
                { tool: "5 ПОЧЕМУ", note: "Физическая фиксация мысли. Бумага не даёт уйти в петлю." },
                { tool: "ОБРАТНЫЙ БРЕЙНСТОРМ", note: "Стикеры на стену — пространственное мышление через движение руки." },
                { tool: "MIND MAP", note: "Ветви рождаются через скорость. Мышь тормозит поток." },
              ].map((item) => (
                <div key={item.tool} className="border-l-2 border-glow-warm/30 pl-3">
                  <div className="font-mono text-xs text-glow-warm">{item.tool}</div>
                  <p className="text-xs text-foreground/60 mt-1">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </TerminalCard>

        <TerminalCard title="llm.mode" variant="secondary">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-glow-secondary">⬡ LLM</h3>
            <p className="text-sm text-muted-foreground">Ускоряет объём, структуру, аналогии</p>
            <div className="space-y-3">
              {[
                { tool: "SCAMPER", note: "20+ вариаций по 7 осям мгновенно — вручную это час." },
                { tool: "CONSTRAINT DESIGN", note: "50 ограничений → отберите 3 за 10 секунд." },
                { tool: "ANALOGICAL THINKING", note: "Тысячи областей, нетривиальные параллели мгновенно." },
                { tool: "JOBS TO BE DONE", note: "Структурированный анализ трёх уровней." },
              ].map((item) => (
                <div key={item.tool} className="border-l-2 border-secondary/30 pl-3">
                  <div className="font-mono text-xs text-secondary">{item.tool}</div>
                  <p className="text-xs text-foreground/60 mt-1">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </TerminalCard>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center font-mono text-sm text-muted-foreground italic"
      >
        «Карандаш думает вместе с вами. LLM думает быстрее вас. Знайте, что нужно в каждый момент.»
        <span className="block mt-1 text-primary not-italic">— sin.ai.da</span>
      </motion.p>
    </section>
  );
}
