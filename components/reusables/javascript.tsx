import Image from "next/image";
import SkillCard from "./skillCard";

export default function Javascript() {
    return (
        <SkillCard>
            <Image
                src="/images/javascript.png"
                alt="Javascript"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Javascript</h5>
        </SkillCard>
    )
}