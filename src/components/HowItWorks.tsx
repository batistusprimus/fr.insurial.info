export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Get Your Risk Score",
      description: "Answer a few questions (industry, size, ZIP, revenue). Takes under 5 minutes.",
      icon: "📊"
    },
    {
      number: "2", 
      title: "Receive Guidance",
      description: "We send your Risk Score with plain‑English guidance and relevant resources.",
      icon: "🔍"
    },
    {
      number: "3",
      title: "Take Action",
      description: "Use your insights to discuss coverage and budgets with your broker or preferred agent.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process designed to get you the right coverage quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                {/* Step number circle */}
                <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 inline-block">
            <p className="text-sm text-[#1E3A8A] font-medium">
              ✓ Free • No obligation • GDPR compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
