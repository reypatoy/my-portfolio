import Link from "next/link";

export default function Footer() {
    return (
        <footer className="section-shell mt-8 border-t border-slate-800/80 py-8 text-center text-sm text-slate-400">
            <p className="font-medium text-slate-200">© 2026 Rey Patoy</p>
            <p className="mt-2">Built with Node.js • Springboot • Next.js • TypeScript • Tailwind CSS</p>
            <p className="mt-2">
                <Link className="transition-colors hover:text-cyan-300 hover:underline" href={String(process.env.GITHUB_PROFILE)} target="_blank">GitHub</Link>
                <span className="mx-2 text-slate-500">•</span>
                <Link className="transition-colors hover:text-cyan-300 hover:underline" href={String(process.env.LINKED_IN_PROFILE)} target="_blank">LinkedIn</Link>
            </p>
        </footer>
    )
}