export default function ServiceCard({ title, children, titleClass = "", className = "" }: { title: string; children: React.ReactNode; titleClass?: string; className?: string }) {
    return (
        <div className="flex-1 bg-[#020B16] flex flex-col border border-[#223041] rounded-lg p-4 w-full shadow-[0_0_20px_rgba(34,48,65,0.35),inset_0_0_10px_rgba(34,48,65,0.2)]">    
            <h1 className={`pb-2 text-xl font-semibold ${titleClass}`}>{ title }</h1>
            <div className={`flex flex-col gap-2 ${className}`}>
                { children }
            </div>
        </div>
    )
}