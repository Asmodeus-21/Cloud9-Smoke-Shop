
import React from 'react';

const GALLERY_IMAGES = [
  "/gallery/image0.jpeg",
  "/gallery/image1.jpeg",
  "/gallery/image2.jpeg",
  "/gallery/image3.jpeg",
  "/gallery/image4.jpeg",
  "/gallery/image5.jpeg",
  "/gallery/image6.jpeg",
  "/gallery/image7.jpeg",
  "/gallery/image8.jpeg",
  "/gallery/image9.jpeg",
  "/gallery/image10.jpeg",
  "/gallery/image11.jpeg",
  "/gallery/image12.jpeg",
  "/gallery/image13.jpeg",
  "/gallery/image14.jpeg",
  "/gallery/image15.jpeg",
  "/gallery/image16.jpeg",
  "/gallery/image17.jpeg",
  "/gallery/image18.jpeg",
  "/gallery/image19.jpeg",
  "/gallery/image20.jpeg",
  "/gallery/image21.jpeg",
  "/gallery/image22.jpeg",
  "/gallery/image23.jpeg",
  "/gallery/image24.jpeg",
  "/gallery/image25.jpeg",
  "/gallery/image26.jpeg"
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
