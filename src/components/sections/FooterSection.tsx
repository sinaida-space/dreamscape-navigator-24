import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <section className="section-spacing max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-mono text-sm text-muted-foreground tracking-widest">∞</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 text-glow">
          ONE MORE THING
        </h2>
        <div className="mt-10 space-y-6 text-lg text-foreground/70 leading-relaxed">
          <p>Какой вопрос вы перестали себе задавать?</p>
          <p>Что вы знаете о задаче, чего не знает никто другой?</p>
          <p>Если бы решение было простым — каким бы оно было?</p>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="font-mono text-sm text-muted-foreground">
            by <span className="text-primary">Sinaida</span>
          </p>
          <div className="flex items-center justify-center gap-4 mt-3 font-mono text-xs text-muted-foreground">
            <a href="https://sinaida.eu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              sinaida.eu
            </a>
            <span>·</span>
            <a href="https://instagram.com/sin.ai.da" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              @sin.ai.da
            </a>
          </div>
        </div>

        <div className="mt-8 font-mono text-[10px] text-muted-foreground/40 tracking-widest">
          ПЕРЕДАНО ЧЕРЕЗ ПРОСТРАНСТВО ·  ✦
        </div>
      </motion.div>
    </section>
  );
}
