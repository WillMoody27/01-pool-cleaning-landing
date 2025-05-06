const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "Schedule a consultation to discuss your pool maintenance needs and receive a customized service plan.",
  },
  {
    step: "02",
    title: "Professional Assessment",
    description:
      "Our certified technicians conduct a thorough evaluation of your pool's condition and equipment.",
  },
  {
    step: "03",
    title: "Service Execution",
    description:
      "We perform the agreed-upon services with attention to detail and industry-best practices.",
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "Final inspection ensures all services meet our high standards of excellence.",
  },
];

export default function Process() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      id="process"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block h-1 w-20 bg-[#DC2626] mb-8"></span>
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">
            Our Service Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A systematic approach to delivering exceptional pool maintenance
            services
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#DC2626] to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((process, index) => (
              <div key={index} className="relative h-full">
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 h-[280px] flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#DC2626] font-bold text-sm tracking-wider">
                      STEP {process.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>

                {/* Number Indicator */}
                <div className="hidden lg:flex absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#DC2626] text-white text-sm font-bold items-center justify-center shadow-lg">
                  {process.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
