import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, ArrowRight } from "lucide-react"
import { projects } from "@/constants/projects"
import SendContactForm from "./send-contact-form"
import Link from "next/link"

export default function Home() {
  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-emerald-700",
      skills: ["React", "Next.js", "TypeScript", "JavaScript"],
    },
    {
      title: "Backend",
      color: "bg-amber-500",
      skills: ["Nest.js", "Spring Boot", "Java"],
    },
    {
      title: "Database",
      color: "bg-cyan-500",
      skills: ["PostgreSQL"],
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      
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
                Full Stack Developer especializado em criar soluções web modernas e escaláveis
              </p>

              <p className="text-zinc-400 mb-8 leading-relaxed max-w-2xl">
                Desenvolvedor júnior com experiência em projetos web, focado em transformar ideias em soluções digitais. Tenho trabalhado com React e Node.js, e venho me aprofundando em boas práticas de desenvolvimento e arquiteturas cloud-native.
              </p>

              <div className="flex gap-4 justify-center lg:justify-start mt-8">
                <Link href={'https://github.com/luizdev7727'} rel="noopener noreferrer" className="text-zinc-500 hover:text-lime-400">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href={'https://www.linkedin.com/in/luizantonio2003/'} rel="noopener noreferrer" className="text-zinc-500 hover:text-lime-400">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Avatar className="w-64 h-64 ring-4 ring-lime-400/30">
                <AvatarImage src="https://github.com/luizdev7727.png" alt="João Paulo Silva" />
                <AvatarFallback className="bg-zinc-800 text-lime-400 text-6xl font-bold">JP</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Tecnologias & Skills</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Stack completo para desenvolvimento de aplicações modernas e escaláveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="bg-zinc-900 border-zinc-800 hover:border-lime-400/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 ${category.color} rounded-full`} />
                    <h3 className="text-lg font-semibold text-zinc-300">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                      >
                        <div className={`w-2 h-2 ${category.color} rounded-full`} />
                        <span className="text-zinc-300 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Projetos em Destaque</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi e que demonstram minhas habilidades técnicas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-lime-400/30 transition-all duration-300"
              >
                <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-zinc-300 mb-2">{project.name}</h3>
                  <p className="text-zinc-500 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stacks.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-zinc-800 text-zinc-300 border-zinc-700">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="bg-lime-400 text-zinc-950 hover:bg-lime-500" asChild>
                      <Link href={project.url} rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-300 mb-4">Entre em Contato</h2>
            <p className="text-zinc-500">Tem um projeto em mente? Vamos conversar sobre como posso ajudar você.</p>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-8">
              <SendContactForm/>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">© 2024 João Paulo Silva. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-zinc-500 hover:text-lime-400">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-zinc-500 hover:text-lime-400">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-zinc-500 hover:text-lime-400">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
