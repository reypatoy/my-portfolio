import About from "@/components/about";
import Connect from "@/components/connect";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";

export default function Page() {
    return (
        <main className="w-full pb-8">
            <div className="space-y-16 md:space-y-20">
                <About />
                <Skills />
                <Projects />
                <Services />
                <Experience />
                <Connect />
            </div>
            <Footer />
        </main>
    )
}