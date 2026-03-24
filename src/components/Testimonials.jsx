import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const users = [
    "Gopiichand Narasingh", "Venkatesh Nakka", "Sahdev Markam001",
    "Nasmil", "Bunny David", "Dum My"
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-lexend font-bold mb-4 tracking-tight">What Our Users Say</h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                    Hear directly from our satisfied users about their experience with our product. Their words speak volumes about our commitment to quality and innovation.
                </p>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
                {/* Scrolling rows of users */}
                {[1, -1].map((dir, i) => (
                    <motion.div
                        key={i}
                        animate={{ x: dir === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                        className="flex gap-6 w-max"
                    >
                        {[...users, ...users, ...users].map((user, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-[300px] flex-shrink-0 border border-white/20">
                                <div className="flex gap-1 mb-4 text-amber-400">
                                    <Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} />
                                </div>
                                <div className="font-bold flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-primary flex items-center justify-center text-xl shadow-inner">
                                        {user[0]}
                                    </div>
                                    @{user}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
