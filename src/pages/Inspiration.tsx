import React from "react";
import { motion } from "motion/react";
import { Instagram, ArrowRight } from "lucide-react";

const INSPIRATION_GALLERY = [
  {
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-942275.jpg",
    title: "Babil Serisi",
    location: "Modern Salon"
  },
  {
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-203106.jpg",
    title: "Kumkapı Serisi",
    location: "Klasik Oturma Odası"
  },
  {
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-598720.jpg",
    title: "Ethno Caliente",
    location: "Bohem Yatak Odası"
  },
  {
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-223621.jpg",
    title: "Valerian Serisi",
    location: "Minimalist Ofis"
  },
  {
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-669001.jpg",
    title: "Kumkapı Detay",
    location: "Yemek Odası"
  },
  {
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-944242.jpg",
    title: "Ethno Detay",
    location: "Antre"
  },
  {
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-500438.jpg",
    title: "Valerian Detay",
    location: "Çalışma Köşesi"
  },
  {
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-540147.jpg",
    title: "Kumkapı Klasik",
    location: "Lüks Salon"
  }
];

const Inspiration = () => {
  return (
    <main className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 space-y-8 lg:space-y-0">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold"
            >
              İlham Alın
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl lg:text-8xl font-serif"
            >
              Yaşam <span className="serif-italic">Alanlarınızdan</span> Kareler
            </motion.h1>
          </div>
          <div className="flex flex-col items-start lg:items-end space-y-4">
            <p className="text-lg opacity-60 font-light max-w-sm lg:text-right">
              Müşterilerimizin evlerinden gelen gerçek karelerle halılarımızın mekanlara kattığı ruhu keşfedin.
            </p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 text-brand-gold hover:text-brand-ink transition-colors">
              <Instagram size={20} />
              <span className="text-xs uppercase tracking-widest font-bold">@diorahali</span>
            </a>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {INSPIRATION_GALLERY.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-[40px] break-inside-avoid"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-2">{item.location}</span>
                <h3 className="text-2xl text-white font-serif">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 bg-brand-cream rounded-[60px] p-12 lg:p-24 text-center space-y-12">
          <h2 className="text-4xl lg:text-6xl font-serif max-w-3xl mx-auto leading-tight">
            Siz de <span className="serif-italic">Evinizden Kareleri</span> Bizimle Paylaşın
          </h2>
          <p className="text-xl opacity-60 font-light max-w-2xl mx-auto">
            Diora Halı ile yenilediğiniz yaşam alanlarınızın fotoğraflarını #DioraEvim etiketiyle paylaşın, galerimizde yer alın.
          </p>
          <button className="btn-primary bg-brand-ink text-white hover:bg-brand-gold">
            Fotoğraf Gönder
          </button>
        </div>
      </div>
    </main>
  );
};

export default Inspiration;
