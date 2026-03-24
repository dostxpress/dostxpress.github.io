import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#111111] text-white pt-20 pb-10 px-6 sm:px-10 rounded-t-[3rem] mt-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                <h2 className="text-4xl md:text-5xl font-lexend font-bold mb-6">Your Personal Parcel Hub.</h2>
                <p className="text-gray-400 max-w-2xl mb-10 text-lg">
                    We've designed the perfect platform to connect your parcels with travelers going your way, making it easy to send packages quickly and reliably across any distance.
                </p>

                <button className="bg-primary hover:bg-[#0f2e8f] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-transform hover:scale-105">
                    Send Your Parcel <ArrowRight size={20} />
                </button>

                <div className="mt-20 w-full border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <div className="mb-4 md:mb-0">
                        &copy; 2026 DOSTXPRESS. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
