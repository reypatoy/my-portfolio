import Image from "next/image";
import TechsCard from "./reusables/techsCard";
import Link from "next/link";

export default function About() {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center py-2 scroll-mt-20">
            <div className="relative text-center flex items-center justify-start lg:justify-center lg:flex-1 h-full">
                <div className="px-10 h-fit bg-[linear-gradient(to_bottom,#020B16_0%,transparent_18%),linear-gradient(to_right,#020B16_0%,transparent_18%),linear-gradient(to_left,#020B16_0%,transparent_18%),radial-gradient(ellipse_at_center,#132131_0%,#0C1826_60%,#020B16_100%)]">
                    <Image
                        src="/images/profile.png"
                        alt="Profile"
                        width={400}
                        height={400}
                        className="object-contain w-auto h-auto max-h-full max-w-full"
                        priority
                    />
                </div>
            </div>
            <div className="text-left flex-1 h-full flex lg:items-center">
                <div className="w-full">
                    <h2 className="font-bold text-4xl text-[#096472]">Hi, I'm Rey.</h2>
                    <h1 className="text-[#9CA3AF] font-bold text-5xl mt-3">Full-Stack Software Engineer.</h1>
                    <h1 className="text-[#9CA3AF] font-bold text-3xl mt-3">Building scalable backend systems, REST APIs, AI-powered applications, and modern web platforms with over 3 years of professional experience.</h1>
                    <p className="text-[#9CA3AF] font-normal text-lg mt-3">Specialized in Node.js, Spring Boot, Next.js, PostgreSQL, AWS, and AI integrations.</p>
                    <p className="text-[#9CA3AF] font-normal text-lg mt-1">Designing databases, while also capable of delivering responsive front-end features and Managing server deployments. <Link className="transition-all text-cyan-600 underline hover:text-cyan-300" href="/#contact">Let's connect</Link></p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <TechsCard bgColor="#8BC500" text="NodeJs" />
                        <TechsCard bgColor="#77BA1D" text="Springboot" />
                        <TechsCard bgColor="#3178C6" text="Typescript" />
                        <TechsCard bgColor="#ED8B00" text="Java" />
                        <TechsCard bgColor="#F1F5F9" text="NextJs" />
                        <TechsCard bgColor="#336791" text="PostgreSQL" />
                        <TechsCard bgColor="#FF9900" text="AWS" />
                    </div>
                    <div className="flex gap-4 py-4">
                        <Link className="transition-all text-cyan-600 hover:text-cyan-300 hover:underline" href={String(process.env.GITHUB_PROFILE)} target="_blank">[ Github Profile ]</Link>
                        <Link className="transition-all text-cyan-600 hover:text-cyan-300 hover:underline" href={String(process.env.RESUME_DOWNLOAD_LINK)}>[ Download Resume ]</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}