import Image from "next/image";
import SkillCard from "./skillCard";
import Rating from "./rating";

export default function SpringBoot() {
    return (
        <SkillCard>
            <Image
                src="/images/springboot.png"
                alt="Spring Boot"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5 className="text-lg">Spring Boot</h5>
            <Rating rate={3} />
        </SkillCard>
    )
}