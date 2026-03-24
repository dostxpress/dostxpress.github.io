import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, UserCheck, PackageCheck, Train, Bus, Bike, Plane, Car } from 'lucide-react';

const steps = [
    {
        title: "Sign Up",
        description: "Create your account with just your mobile number. Quick, secure, and ready to go in seconds.",
        icon: <UserPlus className="text-primary" size={32} />
    },
    {
        title: "Choose a Traveler",
        description: "Browse verified travelers heading to your destination and select the perfect match for your parcel.",
        icon: <UserCheck className="text-pink-500" size={32} />
    },
    {
        title: "Send Your Parcel",
        description: "Hand over your package and track its journey in real-time until it safely reaches its destination.",
        icon: <PackageCheck className="text-amber-500" size={32} />
    }
];

const transports = [
    { icon: <Train size={40} />, label: "Train" },
    { icon: <Bus size={40} />, label: "Bus" },
    { icon: <Bike size={40} />, label: "Bike" },
    { icon: <Plane size={40} />, label: "Plane" },
    { icon: <Car size={40} />, label: "Car" }
];

const HowItWorks = () => {
    return (
        <section className="py-24 bg-white/50">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-lexend font-bold text-text-main mb-4 tracking-tight">How DOSTXPRESS Works</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">Seamless flow from sending to delivering.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Steps */}
                    <div className="space-y-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="flex gap-6"
                            >
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-lexend font-bold mb-2 text-text-main">{step.title}</h3>
                                    <p className="text-text-muted leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Transportation Network */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-primary rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden"
                    >
                        {/* Background design */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="text-3xl font-lexend font-bold mb-8 relative z-10">Our Transportation Network</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 relative z-10">
                            {transports.map((t, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center bg-black/10 rounded-2xl p-6 hover:bg-black/20 transition-colors backdrop-blur-sm">
                                    {t.icon}
                                    <span className="mt-4 font-bold tracking-wide">{t.label}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 w-full bg-white text-primary rounded-full py-4 font-bold hover:shadow-lg hover:scale-[1.02] transition-transform text-lg">
                            Start Earning Today
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
