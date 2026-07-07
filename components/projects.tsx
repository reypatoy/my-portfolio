import ProjectCard from "./reusables/projectCard";
import ProjectTechsCard from "./reusables/projectTechsCard";

export default function Projects() {
    return (
        <div id="projects" className="flex-1 flex flex-col items-center scroll-mt-20">
            <h1 className="text-[#F1F5F9] font-bold text-3xl">Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-4">
                <div className="flex-1 flex flex-row flex-wrap">
                    <ProjectCard title="Backlog-Buddy (November 2025 - May 2026)" className="">
                        <p>Interact with the client through virtual meetings & feature implementation.</p>
                        <div className="flex flex-wrap gap-2">
                            <ProjectTechsCard text="NextJs"/>
                            <ProjectTechsCard text="Supabase (ORM & MFA)"/>
                            <ProjectTechsCard text="AI SDK"/>
                            <ProjectTechsCard text="MCP"/>
                            <ProjectTechsCard text="Azure SDK"/>
                            <ProjectTechsCard text="Jira API"/>
                            <ProjectTechsCard text="Docker"/>
                        </div>
                        <p>Built dynamic client workflow. Secure multi-tenant architecture with AI orchestration.</p>
                    </ProjectCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ProjectCard title="AI Blog Generation (August 2025 - Present)">
                        <p>Refactor existing openai api request replace with LangChain4j to handle multi ai providers.</p>
                        <div className="flex flex-wrap gap-2">
                            <ProjectTechsCard text="Springboot"/>
                            <ProjectTechsCard text="PostgreSQ"/>
                            <ProjectTechsCard text="DataForSEO"/>
                            <ProjectTechsCard text="OpenAI"/>
                            <ProjectTechsCard text="Gemini"/>
                            <ProjectTechsCard text="LangChain4j"/>
                        </div>
                        <p>Restructured API orchestration, ensuring robust content generation pipelines.</p>
                    </ProjectCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ProjectCard title="Map Engine Optimization Report (October 2025 - Present)" className="">
                        <p>Migrate from Openai assistant into Openai responses api due to assistant depreciation, and Implement SSE both frontend and backend for real time data updates. Optimize the performance to use only less ram during the process and Investigating and fixing server configuration issues during deployment.</p>
                        <div className="flex flex-wrap gap-2">
                            <ProjectTechsCard text="Sprintboot"/>
                            <ProjectTechsCard text="MySQL"/>
                            <ProjectTechsCard text="OpenAI API"/>
                            <ProjectTechsCard text="SSE"/>
                        </div>
                        <p>Enable real-time updates and drastically reduced RAM footprint during processing.</p>
                    </ProjectCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ProjectCard title="Treasure Keyword Search (May 2025 - Present)">
                        <p>Interact with the client and understand the specifications provided and make a plan and implement the feature. Investigate for third party APIs that the client requested for integration and manage system deployment.</p>
                        <div className="flex flex-wrap gap-2">
                            <ProjectTechsCard text="NodeJs"/>
                            <ProjectTechsCard text="Sprintboot"/>
                            <ProjectTechsCard text="Docker"/>
                            <ProjectTechsCard text="PostgresSQL"/>
                            <ProjectTechsCard text="AWS Batch"/>
                            <ProjectTechsCard text="AWS Fargate"/>
                            <ProjectTechsCard text="AWS ECR"/>
                        </div>
                        <p>Engineered scalable sraping architecture using Docker and AWS Batch for heavy process as well as background task.</p>
                    </ProjectCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ProjectCard title="Search Engine Optimization Keyword Monitoring (November 2024 - Present)" className="">
                        <p>Understand the specifications provided, make a plan and implement the feature. Manage the server deployment both staging and production.</p>
                        <div className="flex flex-wrap gap-2">
                            <ProjectTechsCard text="NuxtJs"/>
                            <ProjectTechsCard text="Express"/>
                            <ProjectTechsCard text="Sequelize"/>
                            <ProjectTechsCard text="MySQL"/>
                            <ProjectTechsCard text="GCP"/>
                            <ProjectTechsCard text="Keyword Tool IO"/>
                            <ProjectTechsCard text="Puppeteer"/>
                        </div>
                        <p>Designed end-to-end data pipelines for detailed keyword and site analytic dashboard.</p>
                    </ProjectCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ProjectCard title="Map Engine Optimization Registration (April 2024 - October 2024)">
                        <p>Interact with the client and understand the specifications provided and make a plan and implement the feature. Investigate for third party APIs that the client requested for integration and manage system deployment.</p>
                        <div className="flex flex-wrap gap-2">
                            <ProjectTechsCard text="NodeJs"/>
                            <ProjectTechsCard text="Springboot"/>
                            <ProjectTechsCard text="Docker"/>
                            <ProjectTechsCard text="PostgreSQL"/>
                            <ProjectTechsCard text="AWS Batch"/>
                            <ProjectTechsCard text="AWS Fargate"/>
                            <ProjectTechsCard text="AWS ECR"/>
                        </div>
                        <p>Engineered scalable scraping architecture using Docker and AWS Batch for heavy process as well as background task.</p>
                    </ProjectCard>
                </div>
            </div>
            <div className="flex flex-1 flex-row flex-wrap mt-4 w-full">
                    <ProjectCard title="Japanese Learning (March 2023 - February 2024)">
                        <p>Implement the UI from the design provided by the client, and connect to the backend api and fixes some bugs during the connection.</p>
                        <div className="flex flex-wrap gap-2">
                            <ProjectTechsCard text="ReactJs"/>
                            <ProjectTechsCard text="Tailwind"/>
                            <ProjectTechsCard text="Springboot"/>
                            <ProjectTechsCard text="Mybatis"/>
                            <ProjectTechsCard text="MySQL"/>
                        </div>
                        <p>Manage frontend and backend connections to interact perfectly.</p>
                    </ProjectCard>
                </div>
        </div>
    )
}