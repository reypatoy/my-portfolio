import Image from "next/image";
import SkillCard from "./skillCard";

export default function Cognito() {
    return (
        <SkillCard>
            <Image
                src="/images/cognito.png"
                alt="Cognito"
                width={60}
                height={60}
                className="bg-white object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Cognito</h5>
        </SkillCard>
    )
}