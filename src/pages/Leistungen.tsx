import { motion } from "framer-motion";
import { Layers, ArrowDown, Hammer } from "lucide-react";

import imgFussboden from "@/assets/leistungen-fussboden.jpg";
import imgDecken from "@/assets/leistungen-decken.jpg";
import imgTrockenbau from "@/assets/leistungen-trockenbau.jpg";

const services = [
  {
    icon: Layers,
    title: "Fußbodenverlegung",
    desc: "Ob Parkett, Laminat, Vinyl oder Designbelag – wir verlegen Ihren Boden fachgerecht und passgenau. Inklusive Untergrundvorbereitung, Dämmung und sauberer Abschlüsse.",
    image: imgFussboden,
  },
  {
    icon: ArrowDown,
    title: "Decken abhängen",
    desc: "Abgehängte Decken für bessere Raumakustik, integrierte Beleuchtung oder einfach ein moderneres Erscheinungsbild. Wir arbeiten mit Gipskarton- und Akustikdeckensystemen.",
    image: imgDecken,
  },
  {
    icon: Hammer,
    title: "Trockenbau",
    desc: "Raumteiler, Vorwandinstallationen, Dachgeschossausbau – Trockenbau ist unser Kerngeschäft. Schnell, sauber und vielseitig einsetzbar für jeden Grundriss.",
    image: imgTrockenbau,
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
            Sie haben ein anderes Vorhaben? Fragen Sie uns gerne an – wir prüfen, ob wir auch Ihr Projekt umsetzen können.
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
              <div className="shrink-0 overflow-hidden rounded-2xl md:w-1/2">
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left md:w-1/2">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <s.icon className="h-7 w-7" />
                </div>
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
