import Image from "next/image";
import SkillCard from "./skillCard";

export default function LoadBalancer() {
    return (
        <SkillCard>
            <Image
                src="/images/load-balancer.png"
                alt="Load Balancer"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Load Balancer</h5>
        </SkillCard>
    )
}