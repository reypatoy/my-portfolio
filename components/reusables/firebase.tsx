import Image from "next/image";
import SkillCard from "./skillCard";
import Rating from "./rating";

export default function Firebase() {
    return (
        <SkillCard>
            <Image
                src="/images/firebase.png"
                alt="Firebase"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5 className="text-lg">Firebase</h5>
            <Rating rate={3} />
        </SkillCard>
    )
}