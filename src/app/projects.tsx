import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-lime-400 text-sm font-mono font-medium tracking-widest uppercase">
            Portfólio
          </span>
          <h2 className="text-3xl font-bold text-zinc-300 mt-2">
            Projetos em Destaque
          </h2>
        </div>

        <div className="space-y-6 max-h-[780px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-zinc-800 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-lime-400/50">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-lime-400/30 transition-all duration-300"
            >
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex flex-col justify-between">
                <div>
                  <span className="text-lime-400/50 text-xs font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-200 mt-1 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stacks.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-zinc-800 text-zinc-400 border-zinc-700 text-xs"
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    size="sm"
                    className="bg-lime-400 text-zinc-950 hover:bg-lime-500"
                    asChild
                  >
                    <Link href={project.url} rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver projeto
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
