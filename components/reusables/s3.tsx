import Image from "next/image";
import SkillCard from "./skillCard";

export default function S3() {
    return (
        <SkillCard>
            <Image
                src="/images/s3.png"
                alt="S3"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>S3</h5>
        </SkillCard>
    )
}