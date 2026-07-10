import ServiceCard from "./reusables/serviceCard";

export default function Services() {
    return (
        <div id="services" className="flex-1 flex flex-col items-center scroll-mt-20">
            <h1 className="text-slate-400 font-bold text-3xl">Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-4">
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Full-Stack Web Developer" className="">
                        <p>Build high performance APIs</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="Backend Development">
                        <p>Build scalable, secure, and maintainable server-side applications using modern frameworks and best practices.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Interactive Frontend Design" className="">
                        <p>Create responsive, user-friendly UI/UX</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="Database Architecture" className="">
                        <p>Optimize data storage, security and migration</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="REST API Development">
                        <p>Design and develop fast, reliable RESTful APIs that integrate seamlessly with web, mobile, and third-party services.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Real-Time Applications">
                        <p>Develop real-time features such as live chat, notifications, activity feeds, and collaborative experiences using WebSockets.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Cloud & AWS Deployment">
                        <p>Deploy and manage applications on AWS with scalable infrastructure, secure networking, and high availability.</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="CI/CD Automation">
                        <p>Automate building, testing, and deployment pipelines to deliver software faster and more reliably.</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="Authentication & Authorization">
                        <p>Implement secure user authentication, role-based access control, and OAuth integrations to protect applications.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="System Integration">
                        <p>Connect applications with external APIs, payment gateways, cloud services, and business platforms.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Performance Optimization">
                        <p>Improve application speed, scalability, and resource efficiency through profiling and optimization techniques.</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="Microservices Development">
                        <p>Build modular, independently deployable services that improve scalability, maintainability, and system resilience.</p>
                    </ServiceCard>
                </div>
            </div>
        </div>
    )
}