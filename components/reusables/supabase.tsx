import Image from "next/image";
import SkillCard from "./skillCard";

export default function Supabase() {
    return (
        <SkillCard>
            <Image
                src="/images/supabase.png"
                alt="Supabase"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Supabase</h5>
        </SkillCard>
    )
}