"use client";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7"
          alt="Pool Background"
          fill
          className="object-cover brightness-[0.3]"
        />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Crystal Clear Pool Water?
          </h2>
          <p className="text-xl mb-8">
            Get professional pool service starting at $99/month. Schedule your
            free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#DC2626] text-white px-8 py-4 rounded hover:bg-[#B91C1C] transition-colors text-lg font-semibold">
              Schedule Consultation
            </button>
            <button className="bg-white text-[#1E3A8A] px-8 py-4 rounded hover:bg-gray-100 transition-colors text-lg font-semibold">
              View Pricing
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#DC2626]">24/7</div>
              <p className="text-gray-300">Emergency Service</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#DC2626]">100%</div>
              <p className="text-gray-300">Satisfaction Guaranteed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#DC2626]">1000+</div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
