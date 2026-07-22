import Image from "next/image";
import SkillCard from "./skillCard";
import Rating from "./rating";

export default function MongoDB() {
    return (
        <SkillCard>
            <Image
                src="/images/mongoDB.png"
                alt="MongoDB"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5 className="text-lg">MongoDB</h5>
            <Rating rate={4} />
        </SkillCard>
    )
}