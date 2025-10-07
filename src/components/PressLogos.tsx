import Image from 'next/image';

const LOGOS = [
  { src: '/Press/wall_street_journal.png', alt: 'The Wall Street Journal' },
  { src: '/Press/reuters.png', alt: 'Reuters' },
  { src: '/Press/forbes.png', alt: 'Forbes' },
  { src: '/Press/bloomberg.png', alt: 'Bloomberg' },
  { src: '/Press/business_insurance.png', alt: 'Business Insurance' },
  { src: '/Press/insurance_journal.png', alt: 'Insurance Journal' },
];

export default function PressLogos() {
  return (
    <section aria-label="Couverture média par" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-sm font-medium text-gray-500">Couverture médiatique par</p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center">
          {LOGOS.map((logo) => (
            <div key={logo.src} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={48}
                className="h-8 w-auto grayscale opacity-80"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


