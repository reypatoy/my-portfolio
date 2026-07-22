import Image from "next/image";
import SkillCard from "./skillCard";
import Rating from "./rating";

export default function Next() {
    return (
        <SkillCard>
            <Image
                src="/images/next.webp"
                alt="NextJs"
                width={50}
                height={50}
                className="bg-white object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5 className="text-lg">NextJs</h5>
            <Rating rate={4} />
        </SkillCard>
    )
}