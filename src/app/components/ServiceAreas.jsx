"use client";

import Image from "next/image";
import sanAntonioServiceArea from "@public/service-areas-imgs/san-antonio-service-area.png";
import austinServiceArea from "@public/service-areas-imgs/austin-service-area.png";
import dallasServiceArea from "@public/service-areas-imgs/dallas-service-area.png";

const areas = [
  {
    city: "San Antonio",
    description: "Our headquarters and primary service area",
    image: sanAntonioServiceArea,
  },
  {
    city: "Austin",
    description: "Serving the growing New Braunfels community",
    image: austinServiceArea,
  },
  {
    city: "Dallas",
    description: "Professional pool services in Dallas",
    image: dallasServiceArea,
  },
];

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#DC2626] font-medium mb-2">SERVICE AREAS</div>
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
            Areas We Serve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide professional pool services across greater San Antonio and
            surrounding areas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="relative h-[300px]">
                <Image
                  src={area.image}
                  alt={area.city}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{area.city}</h3>
                <p className="text-gray-200">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Don't see your area listed? Contact us to check if we service your
            location.
          </p>
          <button className="bg-[#DC2626] text-white px-8 py-3 rounded hover:bg-[#B91C1C] transition-colors">
            Check Your Area
          </button>
        </div>
      </div>
    </section>
  );
}
