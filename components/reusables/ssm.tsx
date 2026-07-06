import Image from "next/image";
import SkillCard from "./skillCard";

export default function SSM() {
    return (
        <SkillCard>
            <Image
                src="/images/ssm.png"
                alt="SSM"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>SSM</h5>
        </SkillCard>
    )
}