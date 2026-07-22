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
import EC2 from "./reusables/aws";
import Express from "./reusables/express";
import Github from "./reusables/github";
import Bitbucket from "./reusables/bitbucket";
import Jira from "./reusables/jira";
import CICD from "./reusables/cicd";
import Docker from "./reusables/docker";
import DynamoDB from "./reusables/dynamoDB";
import Upstash from "./reusables/upstash";
import AzureDevops from "./reusables/azureDevops";
import AWS from "./reusables/aws";
import Vercel from "./reusables/vercel";

export default function Skills() {
    return (
        <div id="skills" className="flex-1 flex flex-col items-center scroll-mt-20">
            <div className="flex flex-col items-center justify-center py-4 px-20 border-t-1 border-b-1">
                <span className="text-[#096472] font-normal text-md">Core Skills</span>
                <h1 className="text-[#9CA3AF] font-bold text-3xl">Skills & Expertise</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-15">
                <div className="flex-1 flex flex-row flex-wrap">
                    <SkillsCard title="Backend Frameworks">
                        <Express />
                        <SpringBoot />
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
                        <AWS />
                        <Vercel />
                        <Github />
                        <Bitbucket />
                        <Jira />
                        <CICD />
                        <Docker />
                        <Upstash /> 
                        <AzureDevops /> 
                    </SkillsCard>
                </div>
            </div>
        </div>
    )
}