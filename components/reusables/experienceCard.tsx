export default function ExperienceCard({ jobTitle, company, year, address, children,  }: { jobTitle: string; children: React.ReactNode; company: string; year: string; address: string }) {
    return (
        <div className="flex h-full w-full flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_24px_80px_rgba(34,211,238,0.12)]">
            <h1 className="text-xl font-bold tracking-tight text-white md:text-2xl">{ jobTitle } | <span className="text-cyan-300">{ company }, { address }</span></h1>
            <span className="pb-3 pt-2 text-sm font-medium uppercase tracking-[0.12em] text-cyan-300">{ year } </span>
            <div className="flex flex-col gap-2">
                { children }
            </div>
        </div>
    )
}