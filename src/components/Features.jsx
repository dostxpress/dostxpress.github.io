import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Zap, Key } from 'lucide-react';

const featureData = [
    {
        title: "Live Tracking",
        description: "Track your packages in real-time with precise location updates",
        icon: <MapPin size={48} />,
        bgColor: "bg-[#1f97b9]",
        textColor: "text-white"
    },
    {
        title: "KYC Verification",
        description: "Secure identity verification for trusted deliveries",
        icon: <ShieldCheck size={48} />,
        bgColor: "bg-[#f4b621]",
        textColor: "text-[#1f2937]"
    },
    {
        title: "Fast & Affordable",
        description: "Best rates guaranteed with lightning-fast delivery",
        icon: <Zap size={48} />,
        bgColor: "bg-[#00a3ff]",
        textColor: "text-white"
    },
    {
        title: "5 Step Verification",
        description: "Comprehensive security process for maximum safety",
        icon: <Key size={48} />,
        bgColor: "bg-[#ff3659]",
        textColor: "text-white"
    }
];

const Features = () => {
    return (
        <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {featureData.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`rounded-[3rem] p-10 flex flex-col justify-between min-h-[300px] ${feature.bgColor} ${feature.textColor} hover:-translate-y-2 transition-transform duration-300 shadow-xl`}
                    >
                        <div className="opacity-80">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="text-3xl font-lexend font-bold mb-3 tracking-tight">{feature.title}</h3>
                            <p className="text-lg opacity-90 leading-relaxed font-outfit">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
