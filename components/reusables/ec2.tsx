import Image from "next/image";
import SkillCard from "./skillCard";

export default function EC2() {
    return (
        <SkillCard>
            <Image
                src="/images/ec2.png"
                alt="EC2"
                width={80}
                height={80}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>EC2</h5>
        </SkillCard>
    )
}