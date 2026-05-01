import { Footer } from "./footer";
import { Contact } from "./contact";
import { Projects } from "./projects";
import { Header } from "./header";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
