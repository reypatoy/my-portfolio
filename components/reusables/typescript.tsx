import Image from "next/image";
import SkillCard from "./skillCard";

export default function Typescript() {
    return (
        <SkillCard>
            <Image
                src="/images/typescript.jpeg"
                alt="Typescript"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Typescript</h5>
        </SkillCard>
    )
}