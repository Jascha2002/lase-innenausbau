import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

const projects = [
  {
    title: "Dachgeschossausbau in Gera-Untermhaus",
    category: "Trockenbau",
    desc: "Kompletter Ausbau eines 80m² Dachgeschosses mit Trockenbau, Dämmung und Wandgestaltung.",
    image: "/placeholder.svg",
  },
  {
    title: "Badezimmer-Sanierung Privathaushalt",
    category: "Fliesenlegen",
    desc: "Komplettsanierung eines Familienbads inklusive Abdichtung, großformatiger Fliesen und bodengleicher Dusche.",
    image: "/placeholder.svg",
  },
  {
    title: "Büroräume Gera Zentrum",
    category: "Fußbodenverlegung",
    desc: "Verlegung von 200m² Designvinyl in modernen Büroräumen inkl. Sockelleisten und Übergangsprofilen.",
    image: "/placeholder.svg",
  },
  {
    title: "Wohnungsrenovierung Altbau",
    category: "Wände streichen",
    desc: "Farbgestaltung und Anstrich einer 3-Zimmer-Altbauwohnung mit hochwertigen Innenfarben.",
    image: "/placeholder.svg",
  },
  {
    title: "Praxisräume Deckengestaltung",
    category: "Decken abhängen",
    desc: "Abgehängte Akustikdecke mit integrierter LED-Beleuchtung für eine Arztpraxis.",
    image: "/placeholder.svg",
  },
  {
    title: "Ladenlokal Umbau",
    category: "Trockenbau",
    desc: "Raumteilung und Wandverkleidung für ein neues Ladenlokal in der Geraer Innenstadt.",
    image: "/placeholder.svg",
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-none shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-video bg-muted">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
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

          {/* Admin Panel Teaser */}
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
