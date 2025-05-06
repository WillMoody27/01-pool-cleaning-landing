"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How often should I have my pool serviced?",
    answer:
      "We recommend weekly service for optimal pool maintenance. This includes chemical balancing, cleaning, and equipment checks. However, the frequency can vary based on usage and environment.",
  },
  {
    question: "What does regular pool maintenance include?",
    answer:
      "Regular maintenance includes water testing and chemical balancing, skimming debris, brushing walls and tiles, vacuuming, emptying skimmer baskets, and checking equipment functionality.",
  },
  {
    question: "How long does a pool service visit take?",
    answer:
      "A typical maintenance visit takes 30-45 minutes, while deep cleaning services may take 2-3 hours. The duration depends on pool size and condition.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "No, you don't need to be home. As long as we have access to your pool area, we can perform the service while you're away.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We service the greater San Antonio area, including New Braunfels, Boerne, and surrounding communities. Contact us to confirm service in your area.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "Yes, all our technicians are certified and undergo regular training. We're fully licensed, bonded, and insured for your peace of mind.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#DC2626] font-medium mb-2">FAQ</div>
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our pool services and
            maintenance procedures.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold text-[#1E3A8A]">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#DC2626] transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-100 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
