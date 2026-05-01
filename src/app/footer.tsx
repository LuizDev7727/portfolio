import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2025 Luiz Antonio. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="text-zinc-500 hover:text-lime-400"
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-zinc-500 hover:text-lime-400"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-zinc-500 hover:text-lime-400"
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
