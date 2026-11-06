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
import RowLevelSecurity from "./reusables/rowLevelSecurity";
import MultiTenancy from "./reusables/multiTenancy";

export default function Skills() {
    return (
        <section id="skills" className="section-shell scroll-mt-24 pt-8 md:pt-12">
            <div className="section-header">
                <span className="eyebrow">Core Skills</span>
                <h1 className="section-title">Skills & Expertise</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="flex-1">
                    <SkillsCard title="Backend Frameworks">
                        <Express />
                        <SpringBoot />
                    </SkillsCard>
                </div>
                <div className="flex-1">
                    <SkillsCard title="Frontend Frameworks">
                        <React />
                        <Vue />
                        <Next />
                        <Nuxt />
                    </SkillsCard>
                </div>
                <div className="flex-1">
                    <SkillsCard title="Databases">
                        <div className="flex w-full flex-col gap-4 md:flex-row">
                            <SkillsCard
                                title="Relational Databases"
                                titleClass="text-center"
                                className="flex flex-row flex-wrap justify-center gap-2"
                            >
                                <MySQL />
                                <PostgreSQL />
                                <Supabase />
                            </SkillsCard>
                            <SkillsCard
                                title="NoSQL Databases"
                                titleClass="text-center"
                                className="flex flex-row flex-wrap justify-center gap-2"
                            >
                                <MongoDB />
                                <Firebase />
                                <DynamoDB />
                            </SkillsCard>
                        </div>
                    </SkillsCard>
                </div>
                <div className="flex-1">
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
                <div className="flex-1 lg:col-span-2">
                    <SkillsCard title="Security & Architecture">
                        <RowLevelSecurity />
                        <MultiTenancy />
                    </SkillsCard>
                </div>
            </div>
        </section>
    )
}