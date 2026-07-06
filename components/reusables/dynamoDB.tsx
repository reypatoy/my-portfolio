import Image from "next/image";
import SkillCard from "./skillCard";

export default function DynamoDB() {
    return (
        <SkillCard>
            <Image
                src="/images/dynamoDB.png"
                alt="DynamoDB"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>DynamoDB</h5>
        </SkillCard>
    )
}