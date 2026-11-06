import { Building2 } from "lucide-react";
import SkillCard from "./skillCard";
import Rating from "./rating";

export default function MultiTenancy() {
    return (
        <SkillCard>
            <Building2 aria-hidden="true" className="h-[60px] w-[60px] text-cyan-400" strokeWidth={1.5} />
            <h5 className="text-center text-lg">Application-Level Multi-Tenancy</h5>
            <Rating rate={4} />
        </SkillCard>
    )
}
