'use client';

export default function KeyBenefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "Personalized Risk Intelligence",
      description: "Our Risk Score assesses your needs based on industry, size, and location.",
      features: [
        "Data‑informed assessment",
        "Coverage areas to consider",
        "Hidden risk identification"
      ]
    },
    {
      icon: "📚",
      title: "Educational Resource Hub",
      description: "Clear, jargon‑free guides to help you understand business insurance.",
      features: [
        "Guides by insurance type",
        "Checklists & renewal tips",
        "Trends and regulatory updates"
      ]
    },
    {
      icon: "🧭",
      title: "Independent Guidance",
      description: "We don’t sell insurance. Use your Risk Score to talk to your broker.",
      features: [
        "No sales pressure",
        "Actionable next steps",
        "Transparent, educational approach"
      ]
    },
    {
      icon: "⚡",
      title: "Fast, Simple Experience",
      description: "From answering a few questions to getting your Risk Score in minutes.",
      features: [
        "Takes under 5 minutes",
        "Mobile‑friendly",
        "GDPR & SSL"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#1E3A8A]">Insurial</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We turn business insurance complexity into a simple and trustworthy learning experience focused on your Risk Score.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                </div>
              </div>
              
              <div className="pl-16">
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Discover Your Business Insurance Risk Score?
            </h3>
            <p className="text-gray-600 mb-6">
              Get a personalized assessment of your insurance needs in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Free
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Commitment
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GDPR Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
