import Image from "next/image";

export default function About() {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center py-2">
            <div className="relative text-center flex justify-start lg:justify-end lg:flex-1 h-full">
                <div className="px-10 bg-[linear-gradient(to_bottom,#020B16_0%,transparent_18%),linear-gradient(to_right,#020B16_0%,transparent_18%),linear-gradient(to_left,#020B16_0%,transparent_18%),radial-gradient(ellipse_at_center,#132131_0%,#0C1826_60%,#020B16_100%)]">
                    <Image
                        src="/images/profile.png"
                        alt="Profile"
                        width={300}
                        height={300}
                        className="object-contain w-auto h-auto max-h-full max-w-full"
                        priority
                    />
                </div>
            </div>
            <div className="text-left flex-1 h-full flex lg:items-center">
                <div className="w-full">
                    <h2 className="font-bold text-2xl text-[#096472]">Hi, I'm Rey.</h2>
                    <h1 className="text-[#F1F5F9] font-bold text-3xl">Full-Stack Web Developer.</h1>
                    <h1 className="text-[#F1F5F9] font-bold text-3xl">Strong Backend Focus.</h1>
                    <p className="text-[#F1F5F9] font-normal text-md mt-2">Engineering robust, scalable applications from database to interface.</p>
                    <p className="text-[#F1F5F9] font-normal text-md">Skilled in building scalable REST APIs, designing databases, while also capable of delivering responsive front-end features and Managing server deployments.</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="py-1 px-2 bg-[#F7DF1E] rounded-md text-[#111827]">Javascript</span>
                        <span className="py-1 px-2 bg-[#3178C6] rounded-md text-[#111827]">Typescript</span>
                        <span className="py-1 px-2 bg-[#ED8B00] rounded-md text-[#111827]">Java</span>
                        <span className="py-1 px-2 bg-[#6F42C1] rounded-md text-[#111827]">SQL</span>
                        <span className="py-1 px-2 bg-[#E34F26] rounded-md text-[#111827]">HTML</span>
                        <span className="py-1 px-2 bg-[#1572B6] rounded-md text-[#111827]">CSS</span>
                        <span className="py-1 px-2 bg-[#06B6D4] rounded-md text-[#111827]">Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </div>
    )

}