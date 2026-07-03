import Card from "./reusables/card";
import Java from "./reusables/java";
import Javascript from "./reusables/javascript";
import Typescript from "./reusables/typescript";
import React from "./reusables/react";
import Vue from "./reusables/vue";
import Next from "./reusables/next";
import Nuxt from "./reusables/nuxt";

export default function Skills() {
    return (
        <div id="skills" className="flex-1 flex flex-col items-center">
            <span className="text-[#096472] font-normal text-md">Core Skills</span>
            <h1 className="text-[#F1F5F9] font-bold text-3xl">My Skills & Expertise</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-4">
                <div className="flex-1 flex flex-row flex-wrap">
                    <Card title="Programming Languages">
                        <Javascript />
                        <Typescript />
                        <Java />
                    </Card>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <Card title="Frontend Frameworks">
                        <React />
                        <Vue />
                        <Next />
                        <Nuxt />
                    </Card>
                </div>
            </div>
        </div>
    )
}