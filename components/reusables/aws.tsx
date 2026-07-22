import Image from "next/image";
import SkillCard from "./skillCard";
import Rating from "./rating";

export default function AWS() {
    return (
        <SkillCard>
            <Image
                src="/images/aws.png"
                alt="AWS"
                width={100}
                height={100}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5 className="text-lg">AWS</h5>
            <Rating rate={3} />
        </SkillCard>
    )
}