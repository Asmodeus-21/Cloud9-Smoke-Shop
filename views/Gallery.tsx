
import React from 'react';

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1552331500-1c5c06637e1a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550418406-930438138982?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610444697397-6c8411b43521?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594918715878-1b2d7f87a8e7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612232134966-a9b076b9fbe1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1456154875044-d65be3806225?q=80&w=800&auto=format&fit=crop"
];

const Gallery: React.FC = () => {
  return (
    <div className="pb-32 pt-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6 text-near-black">Atmosphere</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the visual identity of Cloud9. A world of premium vapor, precision hardware, and artisan glass work. No clones, no compromises.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((url, i) => (
            <div 
              key={i} 
              className="bg-white border border-brand-light p-3 rounded-[2.5rem] group overflow-hidden break-inside-avoid animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <img 
                  src={url} 
                  alt={`Vape Atmosphere ${i + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <h3 className="text-white font-bold text-xl uppercase tracking-tighter">Premium Collection</h3>
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
