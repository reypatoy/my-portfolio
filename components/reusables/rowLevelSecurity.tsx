import { ShieldCheck } from "lucide-react";
import SkillCard from "./skillCard";
import Rating from "./rating";

export default function RowLevelSecurity() {
    return (
        <SkillCard>
            <ShieldCheck aria-hidden="true" className="h-[60px] w-[60px] text-emerald-400" strokeWidth={1.5} />
            <h5 className="text-center text-lg">Row Level Security</h5>
            <Rating rate={4} />
        </SkillCard>
    )
}
