import Image from 'next/image';

const SUMMIT_LOGOS = [
  { src: '/Summits/money2020.png', alt: 'Money20/20' },
  { src: '/Summits/global_insurance_symposium.png', alt: 'Global Insurance Symposium' },
  { src: '/Summits/insurance_innovators_summit.png', alt: 'Insurance Innovators Summit' },
  { src: '/Summits/sxsw.png', alt: 'SXSW' },
];

export default function SummitsLogos() {
  return (
    <section aria-label="Inspiré par des événements clés" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-sm font-medium text-gray-500">Inspiré par des événements clés</p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 items-center">
          {SUMMIT_LOGOS.map((logo) => (
            <div key={logo.src} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={54}
                className="h-9 w-auto grayscale opacity-80"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


