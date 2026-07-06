import Image from "next/image";
import SkillCard from "./skillCard";

export default function Bitbucket() {
    return (
        <SkillCard>
            <Image
                src="/images/bitbucket.png"
                alt="Bitbucket"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Bitbucket</h5>
        </SkillCard>
    )
}