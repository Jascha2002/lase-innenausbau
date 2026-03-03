import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Award, Clock, Layers, PaintBucket, Grid3X3, ArrowDown, Hammer } from "lucide-react";

const services = [
  { icon: Layers, title: "Fußbodenverlegung", desc: "Parkett, Laminat, Vinyl & mehr" },
  { icon: ArrowDown, title: "Decken abhängen", desc: "Akustik- & Designdecken" },
  { icon: Hammer, title: "Trockenbau", desc: "Wände, Verkleidungen & Raumteiler" },
  { icon: PaintBucket, title: "Wände streichen", desc: "Farbgestaltung & Anstriche" },
  { icon: Grid3X3, title: "Fliesenlegen", desc: "Bad, Küche & Wohnbereiche" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl leading-tight sm:text-7xl">
              Innenausbau<br />
              <span className="text-accent">mit Leidenschaft</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70">
              LA.SE Innenausbau – Ihr zuverlässiger Handwerkspartner in Gera.
              Von Trockenbau bis Fliesenarbeiten – professionell, termingerecht und fair.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/kontakt">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt Kontakt aufnehmen
                </Button>
              </Link>
              <Link to="/leistungen">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Unsere Leistungen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-4xl sm:text-5xl">Unsere Leistungen</h2>
            <p className="mt-3 text-muted-foreground">Kompetenz in allen Bereichen des Innenausbaus</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group h-full border-none bg-secondary transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/leistungen">
              <Button variant="outline">Alle Leistungen ansehen</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-secondary py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: MapPin, title: "Lokal in Gera", desc: "Verwurzelt in Thüringen – nah am Kunden, schnell vor Ort." },
              { icon: Award, title: "Qualitätsarbeit", desc: "Saubere Ausführung, hochwertige Materialien, faire Preise." },
              { icon: Clock, title: "Termingerecht", desc: "Pünktliche Fertigstellung – darauf können Sie sich verlassen." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-4xl">Projekt geplant?</h2>
          <p className="mt-3 text-primary-foreground/70">
            Kontaktieren Sie uns für eine unverbindliche Beratung.
          </p>
          <Link to="/kontakt">
            <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
              Kostenlos anfragen
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
