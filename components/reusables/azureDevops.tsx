import Image from "next/image";
import SkillCard from "./skillCard";

export default function AzureDevops() {
    return (
        <SkillCard>
            <Image
                src="/images/azure-devops.png"
                alt="Azure DevOps"
                width={60}
                height={60}
                className="object-contain w-auto h-auto max-h-full rounded-sm"
                priority
            />
            <h5>Azure DevOps</h5>
        </SkillCard>
    )
}