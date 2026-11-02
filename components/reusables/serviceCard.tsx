export default function ServiceCard({ title, children, titleClass = "", className = "" }: { title: string; children: React.ReactNode; titleClass?: string; className?: string }) {
    return (
        <div className="flex h-full w-full flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_24px_80px_rgba(34,211,238,0.12)]">
            <h1 className={`pb-3 text-xl font-bold tracking-tight text-white md:text-2xl ${titleClass}`}>{ title }</h1>
            <div className={`flex flex-col gap-3 ${className}`}>
                { children }
            </div>
        </div>
    )
}