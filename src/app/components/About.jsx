import Image from "next/image";

const features = [
  "Licensed and Professional Staff",
  "Premium Pool Maintenance",
  "100% Satisfaction Guaranteed",
  "Fully Insured Services",
  "Modern Equipment and Techniques",
];
// 
export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc"
                alt="Pool Service Professional"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <span className="text-4xl font-bold text-[#DC2626] block">
                20+
              </span>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
          <div>
            <div className="text-[#DC2626] font-medium mb-4">ABOUT US</div>
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">
              Best Pool Services Provider Since 2001
            </h2>
            <p className="text-gray-600 mb-8">
              We take pride in delivering exceptional pool services with a focus
              on quality and customer satisfaction. Our team of experienced
              professionals ensures that every pool we service meets the highest
              standards of cleanliness and safety.
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#DC2626] mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-[#DC2626] text-white px-6 py-3 rounded hover:bg-[#B91C1C] transition-colors">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
