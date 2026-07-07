export default function ProjectTechsCard({ text }: { text: string; }) {
    return (
        <span className='border border-[#223041] rounded-sm py-1 px-2 shadow-[0_0_20px_rgba(34,48,65,0.35),inset_0_0_10px_rgba(34,48,65,0.2)]'>
            { text }
        </span>
    )
}