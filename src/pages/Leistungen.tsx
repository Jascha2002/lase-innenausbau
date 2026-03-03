import { motion } from "framer-motion";
import { Layers, ArrowDown, Hammer, PaintBucket, Grid3X3 } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Fußbodenverlegung",
    desc: "Ob Parkett, Laminat, Vinyl oder Designbelag – wir verlegen Ihren Boden fachgerecht und passgenau. Inklusive Untergrundvorbereitung, Dämmung und sauberer Abschlüsse.",
  },
  {
    icon: ArrowDown,
    title: "Decken abhängen",
    desc: "Abgehängte Decken für bessere Raumakustik, integrierte Beleuchtung oder einfach ein moderneres Erscheinungsbild. Wir arbeiten mit Gipskarton- und Akustikdeckensystemen.",
  },
  {
    icon: Hammer,
    title: "Trockenbau",
    desc: "Raumteiler, Vorwandinstallationen, Dachgeschossausbau – Trockenbau ist unser Kerngeschäft. Schnell, sauber und vielseitig einsetzbar für jeden Grundriss.",
  },
  {
    icon: PaintBucket,
    title: "Wände streichen",
    desc: "Von der einfachen Renovierung bis zur kreativen Farbgestaltung. Wir streichen Ihre Wände professionell mit hochwertigen Farben und sorgfältiger Vorbereitung.",
  },
  {
    icon: Grid3X3,
    title: "Fliesenlegen",
    desc: "Fliesen für Bad, Küche, Flur oder Terrasse. Wir verlegen Wand- und Bodenfliesen in allen Formaten – inklusive Abdichtung und Fugentechnik.",
  },
];

const Leistungen = () => {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl sm:text-6xl">Unsere Leistungen</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/70">
            Professioneller Innenausbau aus einer Hand – von der Planung bis zur Fertigstellung.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col gap-8 md:flex-row md:items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent mx-auto md:mx-0">
                <s.icon className="h-16 w-16" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-display text-3xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Leistungen;
