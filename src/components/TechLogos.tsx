import Image from 'next/image';

const TECH_LOGOS = [
  { src: '/Tech/google.png', alt: 'Google' },
  { src: '/Tech/zapier.png', alt: 'Zapier' },
  { src: '/Tech/gohighlevel.png', alt: 'GoHighLevel' },
  { src: '/Tech/notion.png', alt: 'Notion' },
  { src: '/Tech/cursor.png', alt: 'Cursor' },
];

export default function TechLogos() {
  return (
    <section aria-label="Conçu avec" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-sm font-medium text-gray-500">Conçu avec</p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-5 items-center">
          {TECH_LOGOS.map((logo) => (
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


