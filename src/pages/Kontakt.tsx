import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const Kontakt = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-5xl sm:text-6xl">Kontakt</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/70">
            Sprechen Sie uns an – wir freuen uns auf Ihr Projekt.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center rounded-xl bg-secondary p-12 text-center">
                  <CheckCircle className="mb-4 h-12 w-12 text-accent" />
                  <h2 className="font-display text-3xl">Vielen Dank!</h2>
                  <p className="mt-2 text-muted-foreground">
                    Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" required placeholder="Ihr Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" type="tel" placeholder="Ihre Telefonnummer" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" type="email" required placeholder="ihre@email.de" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea id="message" required rows={5} placeholder="Beschreiben Sie Ihr Projekt..." />
                  </div>
                  <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Send className="mr-2 h-4 w-4" />
                    Nachricht senden
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-none bg-secondary">
                <CardContent className="p-6 space-y-4">
                  <h2 className="font-display text-2xl">Kontaktdaten</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span>Cubaer Straße 7, 07548 Gera</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <a href="tel:+491749801534" className="hover:text-accent">0174-9801534</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <a href="mailto:larsseidler.info@gmail.com" className="hover:text-accent">larsseidler.info@gmail.com</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <div className="overflow-hidden rounded-xl">
                <iframe
                  title="Standort LA.SE Innenausbau Gera"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.5!2d12.0797!3d50.8797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3b3c0a0a0a0a0%3A0x0!2sCubaer+Stra%C3%9Fe+7%2C+07548+Gera!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
