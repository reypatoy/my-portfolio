export default function TechsCard({ bgColor, text }: { bgColor?: string; text: string; }) {
    return (
        <span 
            className={`py-1 px-2 rounded-md text-[#111827] hover:-translate-y-1 duration-300`}
              style={{
                ...(bgColor && { backgroundColor: bgColor })
            }}
        >
            { text }
        </span>
    )
}