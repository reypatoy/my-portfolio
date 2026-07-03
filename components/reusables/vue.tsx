import Image from "next/image";
import SkillCard from "./skillCard";

export default function Vue() {
    return (
        <SkillCard>
            <Image
                src="/images/vue.png"
                alt="Vue"
                width={50}
                height={50}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>VueJs</h5>
        </SkillCard>
    )
}