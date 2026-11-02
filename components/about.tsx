import Image from "next/image";
import TechsCard from "./reusables/techsCard";
import Link from "next/link";

export default function About() {
    return (
        <section className="section-shell scroll-mt-20 pt-2 md:pt-6">
            <div className="glass-panel overflow-hidden rounded-[32px] border border-slate-800/80 p-5 md:p-8 lg:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1.4fr]">
                    <div className="order-2 lg:order-1">
                        <div className="relative mx-auto max-w-md overflow-hidden rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-4 shadow-[0_24px_80px_rgba(34,211,238,0.18)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(103,232,249,0.18),transparent_40%)]" />
                            <Image
                                src="/images/profile.png"
                                alt="Profile"
                                width={400}
                                height={400}
                                className="relative z-10 mx-auto h-auto w-full max-w-[360px] object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="space-y-5">
                            <span className="eyebrow">Available for freelance & product work</span>
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-cyan-300 md:text-2xl">Hi, I&apos;m Rey.</h2>
                                <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl xl:text-6xl">
                                    Full-Stack Software Engineer.
                                </h1>
                            </div>

                            <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                                Building scalable backend systems, REST APIs, AI-powered applications, and modern web platforms with 4 years of professional experience.
                            </p>

                            <p className="text-base leading-relaxed text-slate-400">
                                Specialized in Node.js, Spring Boot, Next.js, PostgreSQL, AWS, and AI integrations, you can download my resume <Link className="font-medium text-cyan-300 underline-offset-4 transition-colors hover:text-cyan-200 hover:underline" href={String(process.env.RESUME_DOWNLOAD_LINK)}>here</Link>.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1">
                                <TechsCard bgColor="#8BC500" text="NodeJs" />
                                <TechsCard bgColor="#77BA1D" text="Springboot" />
                                <TechsCard bgColor="#3178C6" text="Typescript" />
                                <TechsCard bgColor="#ED8B00" text="Java" />
                                <TechsCard bgColor="#F1F5F9" text="NextJs" />
                                <TechsCard bgColor="#336791" text="PostgreSQL" />
                                <TechsCard bgColor="#FF9900" text="AWS" />
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition-all hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white" href={String(process.env.LINKED_IN_PROFILE)} rel="noopener noreferrer" target="_blank">
                                    LinkedIn Profile
                                </Link>
                                <Link className="rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-slate-500 hover:text-white" href={String(process.env.GITHUB_PROFILE)} rel="noopener noreferrer" target="_blank">
                                    GitHub Profile
                                </Link>
                                <Link className="rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/60 hover:text-cyan-200" href="/#hire-me">
                                    Hire Me
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-3 pt-3">
                                <div className="stat-card">
                                    <strong>4</strong>
                                    <span>Years</span>
                                </div>
                                <div className="stat-card">
                                    <strong>10+</strong>
                                    <span>Projects</span>
                                </div>
                                <div className="stat-card">
                                    <strong>AI</strong>
                                    <span>Driven</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}