import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Fast Deliveries", "Secure Parcels", "Reliable Partners"];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative pt-40 pb-20 px-6 sm:px-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center z-10 min-h-[90vh] overflow-hidden">

            {/* Live Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#e4ebff] border border-[#cbd5e1] text-[#133bb7] px-4 py-1.5 rounded-full font-medium text-sm flex items-center gap-2 mb-8 shadow-sm"
            >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                DOSTXPRESS is now live! 🚀
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-lexend font-bold text-text-main leading-[1.15] max-w-4xl tracking-tight">
                Send your <br className="md:hidden" />
                <span className="relative inline-block h-[1.2em] w-full md:w-[400px] overflow-hidden align-bottom text-primary">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                            className="absolute left-0 right-0 w-full flex justify-center text-primary"
                        >
                            {words[index]}
                        </motion.span>
                    </AnimatePresence>
                </span>
                <br />
                seamlessly with DOSTXPRESS.
            </h1>

            <p className="mt-8 text-text-muted text-lg md:text-xl max-w-2xl font-outfit">
                DOSTXPRESS makes sending packages easier and cheaper than ever before. Just sign up and tell us where you want your package to go.
            </p>

            {/* Discount Badge */}
            <div className="mt-8 border border-gray-300 bg-white/50 backdrop-blur-sm rounded-full px-5 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 shadow-sm">
                <span className="text-blue-500">⚡</span> Get upto 60% off on your first order
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                <button className="bg-black text-white hover:bg-gray-800 flex items-center gap-3 px-6 py-3 rounded-2xl transition-transform hover:scale-105">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                </button>
                <button className="bg-black text-white hover:bg-gray-800 flex items-center gap-3 px-6 py-3 rounded-2xl transition-transform hover:scale-105">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                    <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-lg font-semibold leading-tight">App Store</div>
                    </div>
                </button>
            </div>

            {/* Floating 3D Elements Placeholder for now */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[-5%] top-[40%] hidden lg:block"
            >
                <div className="bg-[#cd9a5b] text-[#5c3a21] p-6 rounded-xl shadow-2xl font-bold text-2xl rotate-[-5deg]">
                    FROM<br />YOU
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-[-5%] top-[50%] hidden lg:block"
            >
                <div className="bg-[#cd9a5b] text-[#5c3a21] p-6 rounded-xl shadow-2xl font-bold text-2xl rotate-[5deg]">
                    TO<br />ANYWHERE
                </div>
            </motion.div>

            {/* Background SVG wavy rope */}
            <div className="absolute top-1/2 left-0 w-full h-[300px] -z-10 opacity-60 pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        fill="none"
                        stroke="var(--color-cyan)"
                        strokeWidth="3"
                        d="M0,160 C320,300,420,0,720,160 C1020,320,1120,0,1440,160"
                    />
                    {/* Animated dot moving along path */}
                    <circle r="6" fill="var(--color-primary)">
                        <animateMotion
                            dur="6s"
                            repeatCount="indefinite"
                            path="M0,160 C320,300,420,0,720,160 C1020,320,1120,0,1440,160"
                        />
                    </circle>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
