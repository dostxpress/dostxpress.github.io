import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white/70 backdrop-blur-md border border-gray-200/50 rounded-full px-8 py-3 flex items-center justify-between z-50 shadow-sm">

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    D
                </div>
                <span className="text-xl font-lexend font-bold text-primary tracking-tight">DOSTXPRESS</span>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 text-text-main font-medium">
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                    How It Works <ChevronDown size={16} />
                </div>
                <div className="cursor-pointer hover:text-primary transition-colors">Blogs</div>
                <div className="cursor-pointer hover:text-primary transition-colors">About</div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                    Others <ChevronDown size={16} />
                </div>
            </div>

            {/* Button */}
            <button className="bg-[#133bb7] hover:bg-[#0f2e8f] text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:scale-105 active:scale-95">
                Contact Us
            </button>

        </nav>
    );
};

export default Navbar;
