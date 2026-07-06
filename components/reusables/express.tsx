import Image from "next/image";
import SkillCard from "./skillCard";

export default function Express() {
    return (
        <SkillCard>
            <Image
                src="/images/nodeJs.png"
                alt="Express.js"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>NodeJs / Express</h5>
        </SkillCard>
    )
}