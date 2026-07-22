import Image from "next/image";
import SkillCard from "./skillCard";
import Rating from "./rating";

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
            <h5 className="text-lg">Bitbucket</h5>
            <Rating rate={3} />
        </SkillCard>
    )
}