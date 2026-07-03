import Image from "next/image";
import SkillCard from "./skillCard";

export default function Nuxt() {
    return (
        <SkillCard>
            <Image
                src="/images/nuxt.png"
                alt="Nuxtjs"
                width={64}
                height={64}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Nuxtjs</h5>
        </SkillCard>
    )
}