export default function ExperienceCard({ jobTitle, company, year, address, children,  }: { jobTitle: string; children: React.ReactNode; company: string; year: string; address: string }) {
    return (
        <div className="flex-1 bg-[#020B16] flex flex-col hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-500/20 border border-[#223041] rounded-lg p-4 w-full shadow-[0_0_20px_rgba(34,48,65,0.35),inset_0_0_10px_rgba(34,48,65,0.2)]">    
            <h1 className={`text-2xl font-semibold`}>{ jobTitle } | <span className="text-[#096472] text-md">{ company }, { address }</span></h1>
            <span className="text-[#096472] text-lg font-italic pb-2">{ year } </span>
            <div className={`flex flex-col gap-2`}>
                { children }
            </div>
        </div>
    )
}