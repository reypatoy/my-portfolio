import Image from "next/image";
import SkillCard from "./skillCard";

export default function Next() {
    return (
        <SkillCard>
            <Image
                src="/images/next.webp"
                alt="NextJs"
                width={50}
                height={50}
                className="bg-white object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>NextJs</h5>
        </SkillCard>
    )
}