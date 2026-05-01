import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23a3e635' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <MapPin className="w-4 h-4 text-lime-400" />
              <span className="text-zinc-500">São Paulo, Brasil</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-300 mb-4">
              <span className="block text-lime-400">Luiz</span>
              Antonio
            </h1>

            <p className="text-xl text-zinc-500 mb-6">
              Full Stack Developer especializado em criar soluções web modernas
              e escaláveis
            </p>

            <p className="text-zinc-400 mb-8 leading-relaxed max-w-2xl">
              Desenvolvedor júnior com experiência em projetos web, focado em
              transformar ideias em soluções digitais. Tenho trabalhado com
              React e Node.js, e venho me aprofundando em boas práticas de
              desenvolvimento e arquiteturas cloud-native.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <Link
                href={"https://github.com/luizdev7727"}
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-lime-400"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/luizantonio2003/"}
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-lime-400"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Avatar className="w-64 h-64 ring-4 ring-lime-400/30">
              <AvatarImage
                src="https://github.com/luizdev7727.png"
                alt="João Paulo Silva"
              />
              <AvatarFallback className="bg-zinc-800 text-lime-400 text-6xl font-bold">
                JP
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}
