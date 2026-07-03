import Image from "next/image";
import SkillCard from "./skillCard";

export default function Java() {
    return (
        <SkillCard>
            <Image
                src="/images/java.png"
                alt="Java"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Java</h5>
        </SkillCard>
    )
}