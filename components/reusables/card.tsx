export default function Card({ title, children, titleClass = "", className = "" }: { title: string; children: React.ReactNode; titleClass?: string; className?: string }) {
    return (
        <div className="flex-1 bg-[#020B16] border border-[#223041] rounded-lg pl-6 p-4 w-full shadow-[0_0_20px_rgba(34,48,65,0.35),inset_0_0_10px_rgba(34,48,65,0.2)]">    
            <h1 className={`pb-4 text-xl font-semibold ${titleClass}`}>{ title }</h1>
            <div className={`flex flex-row flex-wrap justify-around gap-2 ${className}`}>
                { children }
            </div>
        </div>
    )
}