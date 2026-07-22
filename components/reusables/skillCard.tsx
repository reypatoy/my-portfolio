import Image from "next/image";

export default function SkillCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-1 flex-col gap-2 items-center justify-end hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-500/20 border border-[#223041] rounded-lg p-4 px-6 shadow-[0_0_20px_rgba(34,48,65,0.35),inset_0_0_10px_rgba(34,48,65,0.2)]">
            {children}
        </div>
    )
}