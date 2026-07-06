import Image from "next/image";
import SkillCard from "./skillCard";

export default function CICD() {
    return (
        <SkillCard>
            <Image
                src="/images/cicd.png"
                alt="CICD"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>CICD</h5>
        </SkillCard>
    )
}