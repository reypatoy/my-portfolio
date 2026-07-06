import Image from "next/image";
import SkillCard from "./skillCard";

export default function Nginx() {
    return (
        <SkillCard>
            <Image
                src="/images/nginx.png"
                alt="Nginx"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Nginx</h5>
        </SkillCard>
    )
}