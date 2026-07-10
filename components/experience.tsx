import ExperienceCard from "./reusables/experienceCard";

export default function Experience() {
    return (
        <div id="experience" className="flex-1 flex flex-col items-center scroll-mt-20">
            <h1 className="text-slate-400 font-bold text-3xl">Professional Experience</h1>
            <div className="flex flex-col gap-4 w-full mt-4">
                <ExperienceCard jobTitle= "Software Engineer" company="Hipe Japan" address="Philippines" year="October 2022 - PRESENT">
                    <p>Build and maintain scalable backend APIs using Java Spring Boot and Node.js. Design optimized databases, develop responsive front-end features with React, Vue, and Nuxt (Redux, Pinia), and integrate third-party services such as OpenAI, DataForSEO, AWS, and GCP in Agile environments.</p>
                </ExperienceCard>
                <ExperienceCard jobTitle= "Software Engineer" company="ITFrontdoor" address="Netherlands" year="November 2025 - April 2026">
                    <p>Developed an AI-powered chat application using Next.js and Supabase, integrating AI SDK with MCP tools to connect and interact with Azure DevOps services. Designed real-time messaging features, implemented backend logic, and built secure integrations for seamless DevOps automation.</p>
                </ExperienceCard>
            </div>
        </div>
    )
}