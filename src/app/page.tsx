import { Separator } from "@/components/ui/separator";
import { projects } from "@/constants/projects";
import Image from "next/image";
import SendContactForm from "./send-contact-form";

export default function Home() {
  return (
    <main className="mx-auto max-w-[880px] min-h-screen py-12 sm:py-16 px-4 flex flex-col items-center">

      <div className="relative flex flex-col items-center mb-10">
        
        <div className="relative mb-8 sm:mb-10">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-200 via-primary-200 to-primary-300 dark:from-primary-800/50 dark:via-primary-700/30 dark:to-primary-700/50 rounded-full opacity-70 blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-300/20 via-primary-200/20 to-primary-200/20 dark:from-primary-700/20 dark:via-primary-700/10 dark:to-primary-800/20 rounded-full animate-gradient-xy"></div>
          <div className="relative p-0.5 rounded-full backdrop-blur">
            <div className="relative z-10 rounded-full overflow-hidden p-0.5 bg-white dark:bg-primary-950 ring-1 ring-primary-100/90 dark:ring-primary-800/50">
              <img className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover transition-all duration-300" src="https://github.com/luizdev7727.png" alt="" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/10 dark:to-black/30 opacity-40"></div>
            </div>
          </div>
        </div>

        <div className="text-center px-6 sm:px-0 max-w-md">
          <div className="mb-2 sm:mb-3">
            <h1 className="text-2xl sm:text-3xl font-medium font-primary text-primary-950 dark:text-primary-100 transition-colors duration-300 tracking-tight relative">Luiz Antonio</h1>
            <div className="h-[2px] w-20 mx-auto mt-2 bg-gradient-to-r from-transparent via-primary-400/40 to-transparent dark:via-primary-600/30"/>
            <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 transition-colors duration-300 mb-4 sm:mb-6 font-medium">Software Engineer</p>
            <p className="text-[.9375rem] text-primary-500 dark:text-primary-400 transition-colors duration-300 max-w-lg mx-auto leading-relaxed text-balance">Building high-performance web applications with TypeScript and React. Previously at Vercel, Stripe, and GitHub.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4 mb-14">
        <a href="https://x.com/luizz_dev" className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-primary-50 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-100 hover:shadow-[0_2px_5px_rgba(0,0,0,0.08)] dark:bg-primary-800/40 dark:hover:bg-primary-800/60 sm:h-10 sm:w-10" title="X" target="_blank" rel="noopener noreferrer" data-astro-cid-zamss57n=""> <span className="absolute inset-0 opacity-0 group-hover:opacity-100" data-astro-cid-zamss57n=""> <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-primary-300/40 to-primary-400/10 dark:from-primary-700/20 dark:to-primary-800/5" data-astro-cid-zamss57n=""></span> </span> <svg width="1em" height="1em" className="relative size-4 text-primary-500 transition-colors duration-300 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-200 sm:size-[1.125rem]" data-astro-cid-zamss57n="true" data-icon="simple-icons:x">   <symbol id="ai:simple-icons:x" viewBox="0 0 24 24"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></symbol><use href="#ai:simple-icons:x"></use></svg></a>
        <a href="https://www.linkedin.com/in/luizantonio2003/" className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-primary-50 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-100 hover:shadow-[0_2px_5px_rgba(0,0,0,0.08)] dark:bg-primary-800/40 dark:hover:bg-primary-800/60 sm:h-10 sm:w-10" title="LinkedIn" target="_blank" rel="noopener noreferrer" data-astro-cid-zamss57n=""> <span className="absolute inset-0 opacity-0 group-hover:opacity-100" data-astro-cid-zamss57n=""> <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-primary-300/40 to-primary-400/10 dark:from-primary-700/20 dark:to-primary-800/5" data-astro-cid-zamss57n=""></span> </span> <svg width="1em" height="1em" className="relative size-4 text-primary-500 transition-colors duration-300 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-200 sm:size-[1.125rem]" data-astro-cid-zamss57n="true" data-icon="simple-icons:linkedin">   <symbol id="ai:simple-icons:linkedin" viewBox="0 0 24 24"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"></path></symbol><use href="#ai:simple-icons:linkedin"></use></svg></a>
      </div>

      <div className="w-full flex flex-wrap gap-4">
        {
          projects.map(({ id, description, name, stacks, thumbnail, url }) => {
            return (
              <a href={url} target='_blank' key={id} className="border border-input rounded-md max-w-[400px]">
                
                <Image width={600} height={600} className="rounded-t-lg" src={thumbnail} alt={`${name} logo`}/>
                
                <div className="w-full p-4">
                  <h1 className="text-xl font-medium">{name}</h1>
                  <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
                  
                  <div className="mt-4">
                    {
                      stacks.map(({ id, name }) => {
                        return (
                          <div key={id}>
                            <h1>{name}</h1>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </a>
            )
          })
        }
      
      
      </div>

      <Separator className="mt-10"/>

      <div className="w-full flex flex-col items-start mt-10">
        <h2 className="text-xl font-medium">Entrar em contato</h2>
        <p className="text-sm">Preencha os campos abaixo se quiser agendar uma reunião</p>

        <SendContactForm/>
      </div>

    </main>
  )
}