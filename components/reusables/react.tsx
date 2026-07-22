import Image from "next/image";
import SkillCard from "./skillCard";
import Rating from "./rating";

export default function React() {
    return (
        <SkillCard>
            <Image
                src="/images/react.png"
                alt="ReactJs"
                width={55}
                height={55}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5 className="text-lg">ReactJs</h5>
            <Rating rate={4} />
        </SkillCard>
    )
}