import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Main from "@/components/Main";
// import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <div className="overflow-x-clip">
        <Main />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </div>
    </div>
  );
}
