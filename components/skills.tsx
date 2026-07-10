import SkillsCard from "./reusables/skillsCard";
import SpringBoot from "./reusables/springboot";
import React from "./reusables/react";
import Vue from "./reusables/vue";
import Next from "./reusables/next";
import Nuxt from "./reusables/nuxt";
import MySQL from "./reusables/mysql";
import PostgreSQL from "./reusables/postgreSQL";
import Supabase from "./reusables/supabase";
import MongoDB from "./reusables/mongoDB";
import Firebase from "./reusables/firebase";
import EC2 from "./reusables/ec2";
import S3 from "./reusables/s3";
import Cognito from "./reusables/cognito";
import Express from "./reusables/express";
import Batch from "./reusables/batch";
import Github from "./reusables/github";
import Bitbucket from "./reusables/bitbucket";
import Jira from "./reusables/jira";
import CICD from "./reusables/cicd";
import Docker from "./reusables/docker";
import RDS from "./reusables/rds";
import DynamoDB from "./reusables/dynamoDB";
import Fargate from "./reusables/fargate";
import ECR from "./reusables/ecr";
import VPC from "./reusables/vpc";
import Upstash from "./reusables/upstash";
import LoadBalancer from "./reusables/loadBalancer";
import Nginx from "./reusables/nginx";
import SSM from "./reusables/ssm";
import AzureDevops from "./reusables/azureDevops";

export default function Skills() {
    return (
        <div id="skills" className="flex-1 flex flex-col items-center scroll-mt-20">
            <span className="text-[#096472] font-normal text-md">Core Skills</span>
            <h1 className="text-slate-400 font-bold text-3xl">My Skills & Expertise</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-4">
                <div className="flex-1 flex flex-row flex-wrap">
                    <SkillsCard title="Backend Frameworks">
                        <SpringBoot />
                        <Express />
                    </SkillsCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <SkillsCard title="Frontend Frameworks">
                        <React />
                        <Vue />
                        <Next />
                        <Nuxt />
                    </SkillsCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <SkillsCard title="Databases" className="flex flex-row gap-4">
                        <SkillsCard title="Relational Databases" titleClass="text-center" className="flex flex-row gap-2">
                            <MySQL />
                            <PostgreSQL />
                            <Supabase />
                        </SkillsCard>
                        <SkillsCard title="NoSQL Databases" titleClass="text-center">
                            <MongoDB />
                            <Firebase />
                            <DynamoDB />
                        </SkillsCard>
                    </SkillsCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <SkillsCard title="Cloud & DevOps">
                        <EC2 />
                        <S3 />
                        <Cognito />
                        <Batch />
                        <Github />
                        <Bitbucket />
                        <Jira />
                        <CICD />
                        <Docker />
                        <RDS /> 
                        <Fargate /> 
                        <ECR /> 
                        <VPC /> 
                        <Upstash /> 
                        <LoadBalancer /> 
                        <Nginx /> 
                        <SSM /> 
                        <AzureDevops /> 
                    </SkillsCard>
                </div>
            </div>
        </div>
    )
}