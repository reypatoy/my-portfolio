import Image from "next/image";
import SkillCard from "./skillCard";
import Rating from "./rating";

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
            <h5> className="text-lg"MySQL</h5>
            <Rating rate={4} />
        </SkillCard>
    )
}