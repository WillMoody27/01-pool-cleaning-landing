import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="md:mt-[100px]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#DC2626] font-medium mb-4">
              WE ARE POOL EXPERTS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">
              Professional Pool Service for Your Home and Business
            </h1>
            <p className="text-gray-600 mb-8">
              Expert pool maintenance and cleaning services to keep your water
              crystal clear and your pool in perfect condition.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-[#1E3A8A]">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1E3A8A]">5,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1E3A8A]">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1E3A8A]">4.9/5</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>
            <button className="bg-[#DC2626] text-white px-8 py-3 rounded hover:bg-[#B91C1C] transition-colors">
              Try Our Service →
            </button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7"
              alt="Professional Pool Service"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
