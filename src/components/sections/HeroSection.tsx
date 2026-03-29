import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 section-spacing">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-mono text-sm text-terminal-green tracking-[0.3em] uppercase mb-6 text-glow-terminal"
        >
          sinaida.eu · @sin.ai.da
        </motion.p>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-glow">
          <span className="block">ОТ «ЧТО ЖЕ МНЕ</span>
          <span className="block mt-2">СДЕЛАТЬ?»</span>
          <span className="block mt-4 text-secondary text-glow-secondary">ДО ВАУ-ПРОДУКТА</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-muted-foreground text-lg md:text-xl max-w-xl mx-auto"
        >
          Практический гайд по решению креативных задач — от диагноза до финальной идеи
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 font-mono text-xs text-muted-foreground space-x-4"
        >
          <span className="text-primary">9 методов</span>
          <span>·</span>
          <span className="text-secondary">5 фаз</span>
          <span>·</span>
          <span className="text-accent">Карандаш + LLM</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 text-muted-foreground"
      >
        <div className="font-mono text-xs tracking-widest uppercase mb-2">scroll</div>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
