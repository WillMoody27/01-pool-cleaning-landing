"use client";

import Image from "next/image";
import waterFilterimg from "@public/pool-service-imgs/water-filter-service.png";
import waterTestingimg from "@public/pool-service-imgs/water-testing-service.png";
import repairReplaceService from "@public/pool-service-imgs/repair-replace-service.png";
import regularMaintenanceService from "@public/pool-service-imgs/regular-maintenance-service.png";
import greenPoolRecovery from "@public/pool-service-imgs/green-pool-recovery-service.png";

const services = [
  {
    title: "Regular Maintenance",
    description:
      "Weekly cleaning and chemical balancing for crystal clear water",
    image: regularMaintenanceService,
    features: ["Weekly cleaning", "Chemical balancing", "Equipment checks"],
    alt: "Professional pool maintenance worker cleaning a pool",
  },
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning of all pool components and surfaces",
    image: "https://images.pexels.com/photos/6436202/pexels-photo-6436202.jpeg",
    features: ["Filter cleaning", "Tile scrubbing", "Algae treatment"],
    alt: "Professional pool cleaning equipment in action",
  },
  {
    title: "Equipment Repair",
    description: "Professional repair and replacement of pool equipment",
    image: repairReplaceService,
    features: ["Pump repair", "Filter maintenance", "Heater service"],
    alt: "Pool technician working on pool equipment",
  },
  {
    title: "Water Testing",
    description: "Professional chemical balance and water quality analysis",
    image: waterTestingimg,
    features: ["pH testing", "Chlorine levels", "Water balance"],
    alt: "Professional water testing equipment and process",
  },
  {
    title: "Filter Service",
    description: "Regular maintenance and cleaning of filtration systems",
    image: waterFilterimg,
    features: ["System inspection", "Filter cleaning", "Performance check"],
    alt: "Pool filter system maintenance and service",
  },
  {
    title: "Green Pool Recovery",
    description: "Specialized treatment for algae and contaminated pools",
    image: greenPoolRecovery,
    features: ["Algae removal", "Shock treatment", "Water balancing"],
    alt: "Pool recovery and treatment process",
  },
];

export default function Services() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block h-1 w-20 bg-[#DC2626] mb-8"></span>
          <h2
            id="services-heading"
            className="text-4xl font-bold text-[#1E3A8A] mb-6"
          >
            Our Professional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive pool maintenance and cleaning services delivered with
            expertise and attention to detail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-[#1E3A8A]/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6" role="list">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 text-sm"
                    >
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 bg-[#DC2626] rounded-full mr-3"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <button
                    className="w-full bg-white text-[#1E3A8A] font-medium py-2.5 rounded hover:text-[#DC2626] transition-colors flex items-center justify-center gap-2 text-sm"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    View Details
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
