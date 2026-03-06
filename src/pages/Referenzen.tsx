import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

import imgDachgeschoss from "@/assets/ref-dachgeschoss.jpg";
import imgBuero from "@/assets/ref-buero.jpg";
import imgPraxis from "@/assets/ref-praxis.jpg";
import imgLaden from "@/assets/ref-laden.jpg";

const projects = [
  {
    title: "Dachgeschossausbau in Gera-Untermhaus",
    category: "Trockenbau",
    desc: "Kompletter Ausbau eines 80m² Dachgeschosses mit Trockenbau, Dämmung und Wandgestaltung.",
    image: imgDachgeschoss,
  },
  {
    title: "Büroräume Gera Zentrum",
    category: "Fußbodenverlegung",
    desc: "Verlegung von 200m² Designvinyl in modernen Büroräumen inkl. Sockelleisten und Übergangsprofilen.",
    image: imgBuero,
  },
  {
    title: "Praxisräume Deckengestaltung",
    category: "Decken abhängen",
    desc: "Abgehängte Akustikdecke mit integrierter LED-Beleuchtung für eine Arztpraxis.",
    image: imgPraxis,
  },
  {
    title: "Ladenlokal Umbau",
    category: "Trockenbau",
    desc: "Raumteilung und Wandverkleidung für ein neues Ladenlokal in der Geraer Innenstadt.",
    image: imgLaden,
  },
];

const Referenzen = () => {
  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl sm:text-6xl">Unsere Referenzen</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/70">
            Einblicke in unsere abgeschlossenen Projekte – Qualität, die überzeugt.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-none shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  </div>
                  <CardContent className="p-5">
                    <Badge className="mb-2 bg-accent/10 text-accent hover:bg-accent/20">{p.category}</Badge>
                    <h3 className="font-display text-xl">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-xl border border-accent/20 bg-accent/5 p-8 text-center"
          >
            <Info className="mx-auto mb-3 h-8 w-8 text-accent" />
            <h3 className="font-display text-2xl">Admin Panel – Demnächst verfügbar</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Bald können Sie Ihre Referenzen selbst verwalten – mit eigenem Login, Bildupload und Projektbeschreibungen.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Referenzen;
