import Image from "next/image";
import SkillCard from "./skillCard";

export default function Fargate() {
    return (
        <SkillCard>
            <Image
                src="/images/fargate.png"
                alt="Fargate"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Fargate</h5>
        </SkillCard>
    )
}