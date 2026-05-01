import { Card, CardContent } from "@/components/ui/card";
import SendContactForm from "./send-contact-form";

export function Contact() {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-300 mb-4">
            Entre em Contato
          </h2>
          <p className="text-zinc-500">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar
            você.
          </p>
        </div>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-8">
            <SendContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
