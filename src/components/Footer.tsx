import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-archivo-black text-white mb-4">
              Insurial
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Get clear, trustworthy business insurance guidance and your free Risk Score.
              We don’t sell insurance. Free, no obligation, GDPR compliant.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                SSL Secured
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GDPR Compliant
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#risk-score-form" className="hover:text-white transition-colors">Risk Score</Link>
              </li>
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h4 className="font-semibold text-white mb-4">Insurance</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/insurance/general-liability" className="hover:text-white transition-colors">General Liability</Link>
              </li>
              <li>
                <Link href="/insurance/workers-compensation" className="hover:text-white transition-colors">Workers’ Compensation</Link>
              </li>
              <li>
                <Link href="/insurance/commercial-property" className="hover:text-white transition-colors">Commercial Property</Link>
              </li>
              <li>
                <Link href="/insurance/commercial-auto" className="hover:text-white transition-colors">Commercial Auto</Link>
              </li>
              <li>
                <Link href="/insurance/business-owners-policy" className="hover:text-white transition-colors">Business Owner’s Policy</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-white transition-colors">Legal Information</Link>
              </li>
              <li>
                <Link href="/cookie-settings" className="hover:text-white transition-colors">Cookie Settings</Link>
              </li>
              <li>
                <Link href="/dpa" className="hover:text-white transition-colors">Data Processing Agreement</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@insurial.info" className="hover:text-white transition-colors">hello@insurial.info</a>
              </li>
              <li className="text-sm text-gray-400">Response within 4h</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 <strong>Insurial</strong> by <strong>BPC Group</strong>. All rights reserved.
          </div>
          
          <div className="text-sm text-gray-400">
            Made with ❤️ for growing businesses
          </div>
        </div>
      </div>
    </footer>
  );
}
