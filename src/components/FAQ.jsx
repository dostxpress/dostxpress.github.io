import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What is DOSTXPRESS?",
        answer: "DOSTXPRESS is a peer-to-peer delivery app that connects individuals who need to send parcels with travelers who have spare capacity on their trips. It offers a seamless, affordable, and efficient way to send and receive packages."
    },
    {
        question: "How does it work?",
        answer: "Senders post their delivery requests with parcel details and destination. Travelers browse and accept requests that match their routes. Payments are handled securely through the app, and both parties can track the parcel in real-time."
    },
    {
        question: "Are my parcels safe?",
        answer: "Yes, safety and security are top priorities. DOSTXPRESS includes features like KYC verification for all users, secure in-app payment processing, and a robust 5-step verification system to build trust within the community. Live tracking also provides peace of mind."
    },
    {
        question: "What can I send?",
        answer: "DOSTXPRESS is designed to be flexible and can accommodate various items, from small documents to larger packages. However, there are restrictions on prohibited items (e.g., illegal goods, hazardous materials)."
    }
];

const FAQ = () => {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <section className="py-24 max-w-4xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-lexend font-bold text-text-main tracking-tight">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <button
                            className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        >
                            <span className="font-lexend font-bold tracking-tight text-lg text-text-main">{faq.question}</span>
                            <ChevronDown className={`transform transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                            {openIdx === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-5 text-text-muted leading-relaxed"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
