import Image from "next/image";
import SkillCard from "./skillCard";

export default function MySQL() {
    return (
        <SkillCard>
            <Image
                src="/images/mysql.png"
                alt="MySQL"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>MySQL</h5>
        </SkillCard>
    )
}