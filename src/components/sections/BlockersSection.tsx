import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import TerminalCard from "../TerminalCard";

const blockers = [
  {
    id: "01",
    title: "СИНДРОМ БЕЛОГО ЛИСТА",
    subtitle: "Паралич перед пустым пространством",
    brain: "Префронтальная кора перегружается от бесконечных вариантов. Миндалевидное тело воспринимает неопределённость как угрозу.",
    signs: ["Не знаете, с чего начать", "Прокрастинация через «подготовку»", "Каждый старт кажется неправильным"],
    exit: "Constraint Design — введите жёсткое ограничение. Или намеренно сделайте плохую версию.",
  },
  {
    id: "02",
    title: "ИЛЛЮЗИЯ ПОНИМАНИЯ",
    subtitle: "Решается не та задача",
    brain: "Эффект беглости: что легко обрабатывается, воспринимается как понятное. Мы перестаём задавать вопросы.",
    signs: ["Сразу переходите к решению", "Ответ звучит иначе при уточняющих вопросах", "Ощущение «что-то не то» не уходит"],
    exit: "5 Почему — пять итераций, пока формулировка не перестанет меняться.",
  },
  {
    id: "03",
    title: "ЗАСТРЕВАНИЕ В «ХОРОШЕМ»",
    subtitle: "Первое решение становится единственным",
    brain: "Эффект якоря: первая идея получает дофаминовое вознаграждение. Мозг буквально сопротивляется поиску лучшего.",
    signs: ["Первая идея кажется очевидно правильной", "Другие варианты — лишь «запасные»", "На критику защищаете идею"],
    exit: "Правило 20 идей — запрещено останавливаться до 20 вариантов.",
  },
  {
    id: "04",
    title: "ПЕРФЕКЦИОНИЗМ",
    subtitle: "Стандарт настолько высок, что старт невозможен",
    brain: "Активируются цепи социальной угрозы. Постоянный сигнал ошибки: «лучше не делать, чем сделать неправильно».",
    signs: ["Работа зависает в «почти готово»", "Много времени на незаметные детали", "Показывать работу страшнее, чем не делать"],
    exit: "Версия 0.1 — намеренно назовите черновиком. Разделите создание и оценку.",
  },
  {
    id: "05",
    title: "ИНФОРМАЦИОННОЕ ПЕРЕНАСЫЩЕНИЕ",
    subtitle: "Слишком много референсов убивают голос",
    brain: "Рабочая память: 4±1 единицы. Перегрузка переводит мозг в режим сортировки вместо генерации.",
    signs: ["200 референсов и не можете начать", "Идеи кажутся производными", "Собственный голос исчезает"],
    exit: "Карантин референсов — первые 2 часа без них. Один принцип вместо 200 форм.",
  },
  {
    id: "06",
    title: "ВНУТРЕННИЙ КРИТИК",
    subtitle: "Оценка убивает генерацию в момент рождения",
    brain: "Латеральная префронтальная кора блокирует передачу идей от дефолтной сети к сознанию. Идеи гибнут до оформления.",
    signs: ["Мысли возникают и сразу исчезают", "Список идей всегда короткий", "Стесняетесь идей даже наедине"],
    exit: "Протокол «сначала плохо» — первая версия обязана быть плохой.",
  },
];

export default function BlockersSection() {
  return (
    <section className="section-spacing max-w-6xl mx-auto">
      <SectionHeader
        number="01"
        title="Блокеры творческого процесса"
        subtitle="Почему мозг саботирует вашу работу — и как это остановить"
        glowColor="accent"
      />

      <div className="grid md:grid-cols-2 gap-5">
        {blockers.map((b, i) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <TerminalCard title={`blocker_${b.id}.log`} variant={i % 3 === 0 ? "accent" : "default"}>
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-xs text-accent">{b.id}</span>
                  <h3 className="font-display text-lg font-bold mt-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.subtitle}</p>
                </div>

                <div className="font-mono text-xs text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-3">
                  🧠 {b.brain}
                </div>

                <ul className="space-y-1">
                  {b.signs.map((s, j) => (
                    <li key={j} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-accent mt-0.5">▸</span> {s}
                    </li>
                  ))}
                </ul>

                <div className="font-mono text-xs text-terminal-green text-glow-terminal pt-2 border-t border-border/30">
                  → {b.exit}
                </div>
              </div>
            </TerminalCard>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center font-mono text-sm text-muted-foreground italic max-w-lg mx-auto"
      >
        «Творческий кризис — это не отсутствие таланта. Это мозг, который защищает вас от воображаемой угрозы.»
        <span className="block mt-2 text-primary not-italic">— sin.ai.da</span>
      </motion.blockquote>
    </section>
  );
}
