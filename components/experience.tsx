import ExperienceCard from "./reusables/experienceCard";

export default function Experience() {
    return (
        <section id="experience" className="section-shell scroll-mt-24 pt-8 md:pt-12">
            <div className="section-header">
                <span className="eyebrow">Career Journey</span>
                <h1 className="section-title">Professional Experience</h1>
            </div>
            <div className="flex flex-col gap-5 w-full">
                <ExperienceCard jobTitle= "Software Engineer" company="Hipe Japan" address="Philippines" year="October 2022 - August 2026">
                    <p className="text-base leading-relaxed text-slate-300">Build and maintain scalable backend APIs using Java Spring Boot and Node.js. Design optimized databases, develop responsive front-end features with React, Vue, and Nuxt (Redux, Pinia), and integrate third-party services such as OpenAI, DataForSEO, AWS, and GCP in Agile environments.</p>
                </ExperienceCard>
                <ExperienceCard jobTitle= "Software Engineer" company="ITFrontdoor" address="Netherlands" year="November 2025 - April 2026">
                    <p className="text-base leading-relaxed text-slate-300">Developed an AI-powered chat application using Next.js and Supabase, integrating AI SDK with MCP tools to connect and interact with Azure DevOps services. Designed real-time messaging features, implemented backend logic, and built secure integrations for seamless DevOps automation.</p>
                </ExperienceCard>
            </div>
        </section>
    )
}