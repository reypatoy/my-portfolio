import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <span>© 2026 Rey Patoy</span>
            <span>Built with Node.js • Springboot • Next.js • TypeScript • Tailwind CSS</span>
            <span> <Link className="transition-all hover:underline" href={String(process.env.GITHUB_PROFILE)} target="_blank">GitHub</Link> • <Link className="transition-all hover:underline" href={String(process.env.LINKED_IN_PROFILE)} target="_blank">LinkedIn</Link></span>
        </div>
    )
}