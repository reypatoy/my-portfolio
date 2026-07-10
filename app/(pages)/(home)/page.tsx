import About from "@/components/about";
import Connect from "@/components/connect";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";


export default function Page() {
    return (
        <div className="flex-1 flex flex-col justify-center gap-y-10 pb-5">
            <About />
            <Skills />
            <Projects />
            <Services />
            <Experience />
            <Connect />
        </div>
    )
}