import ServiceCard from "./reusables/serviceCard";

export default function Services() {
    return (
        <section id="services" className="section-shell scroll-mt-24 pt-8 md:pt-12">
            <div className="section-header">
                <span className="eyebrow">What I Deliver</span>
                <h1 className="section-title">Services</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Full-Stack Web Developer" className="">
                        <p className="text-lg">Build high performance APIs</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="Backend Development">
                        <p className="text-lg">Build scalable, secure, and maintainable server-side applications using modern frameworks and best practices.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Interactive Frontend Design" className="">
                        <p className="text-lg">Create responsive, user-friendly UI/UX</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="Database Architecture" className="">
                        <p className="text-lg">Optimize data storage, security and migration</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="REST API Development">
                        <p className="text-lg">Design and develop fast, reliable RESTful APIs that integrate seamlessly with web, mobile, and third-party services.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Real-Time Applications">
                        <p className="text-lg">Develop real-time features such as live chat, notifications, activity feeds, and collaborative experiences using WebSockets.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Cloud & AWS Deployment">
                        <p className="text-lg">Deploy and manage applications on AWS with scalable infrastructure, secure networking, and high availability.</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="CI/CD Automation">
                        <p className="text-lg">Automate building, testing, and deployment pipelines to deliver software faster and more reliably.</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="Authentication & Authorization">
                        <p className="text-lg">Implement secure user authentication, role-based access control, and OAuth integrations to protect applications.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="System Integration">
                        <p className="text-lg">Connect applications with external APIs, payment gateways, cloud services, and business platforms.</p>
                    </ServiceCard>
                </div>
                <div className="flex-1 flex flex-row flex-wrap">
                    <ServiceCard title="Performance Optimization">
                        <p className="text-lg">Improve application speed, scalability, and resource efficiency through profiling and optimization techniques.</p>
                    </ServiceCard>
                </div>
                <div className="flex flex-1 flex-row flex-wrap">
                    <ServiceCard title="Microservices Development">
                        <p className="text-lg">Build modular, independently deployable services that improve scalability, maintainability, and system resilience.</p>
                    </ServiceCard>
                </div>
            </div>
        </section>
    )
}