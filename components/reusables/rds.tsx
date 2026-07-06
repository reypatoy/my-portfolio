import Image from "next/image";
import SkillCard from "./skillCard";

export default function RDS() {
    return (
        <SkillCard>
            <Image
                src="/images/rds.png"
                alt="RDS"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>RDS</h5>
        </SkillCard>
    )
}