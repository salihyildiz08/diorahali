import React from "react";
import { Link } from "react-router-dom";
import { COLLECTIONS } from "../constants";
import { motion } from "motion/react";

export const FeaturedCollections = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-brand-gold font-bold">Koleksiyonlar</span>
            <h2 className="text-5xl lg:text-6xl font-serif leading-tight">
              Seçkin <span className="serif-italic">Tasarımlar</span>
            </h2>
          </div>
          <Link to="/koleksiyonlar" className="group flex items-center space-x-4 text-sm uppercase tracking-widest font-bold">
            <span>Tümünü Keşfet</span>
            <div className="w-12 h-[1px] bg-brand-ink group-hover:w-16 transition-all" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Large Featured Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
              <img
                src={COLLECTIONS[0].image}
                alt={COLLECTIONS[0].name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-brand-ink/30 transition-colors" />
              <div className="absolute top-8 left-8">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-widest font-bold rounded-full">
                  Öne Çıkan
                </span>
              </div>
            </div>
            <h3 className="text-3xl font-serif mb-3">{COLLECTIONS[0].name}</h3>
            <p className="text-sm opacity-60 font-light max-w-lg leading-relaxed">
              {COLLECTIONS[0].description}
            </p>
          </motion.div>

          {/* Side Items */}
          <div className="md:col-span-5 flex flex-col space-y-12">
            {COLLECTIONS.slice(1, 3).map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-brand-ink/30 transition-colors" />
                </div>
                <h3 className="text-2xl font-serif mb-2">{collection.name}</h3>
                <p className="text-xs opacity-60 font-light leading-relaxed">
                  {collection.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
