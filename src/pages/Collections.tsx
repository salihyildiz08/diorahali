import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { COLLECTIONS } from "../constants";

const Collections = () => {
  return (
    <main className="pt-32 pb-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold"
          >
            Koleksiyonlarımız
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif"
          >
            Zerafetin <span className="serif-italic">Tüm</span> Renkleri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg opacity-60 font-light"
          >
            Her bir koleksiyonumuz, farklı bir hikaye ve estetik anlayışla tasarlandı. 
            Evinizin ruhuna en uygun dokunuşu keşfedin.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8">
                <img
                  src={`https://images.weserv.nl/?url=${collection.image}&w=1200&h=800&fit=cover`}
                  alt={collection.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to={`/koleksiyon/${collection.slug}`} className="btn-primary bg-white text-brand-ink">
                    Koleksiyonu İncele
                  </Link>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-serif mb-2">{collection.name}</h2>
                  <p className="text-sm opacity-60 max-w-md">{collection.description}</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Collections;
