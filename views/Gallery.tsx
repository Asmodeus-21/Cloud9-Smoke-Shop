
import React from 'react';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 12 }).map((_, i) => ({
    url: `https://picsum.photos/seed/gallery${i + 20}/800/${i % 2 === 0 ? '1000' : '800'}`,
    title: `Atmosphere #${i + 1}`
  }));

  return (
    <div className="pb-32 pt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6">Atmosphere</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a look inside the shop and explore the colorful, moody vibes that define Cloud9.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="glass p-3 rounded-[2.5rem] border-white/5 group overflow-hidden break-inside-avoid animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <h3 className="text-white font-bold text-xl">{img.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
