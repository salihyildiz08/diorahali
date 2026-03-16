import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { COLLECTIONS, PRODUCTS } from "../constants";
import ProductCard from "../components/ProductCard";
import { ChevronRight } from "lucide-react";

const CollectionDetail = () => {
  const { slug } = useParams();
  const collection = COLLECTIONS.find((c) => c.slug === slug);
  const collectionProducts = PRODUCTS.filter(
    (p) => p.collection.toLowerCase() === slug?.toLowerCase()
  );

  if (!collection) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-serif">Koleksiyon Bulunamadı</h1>
        <Link to="/koleksiyonlar" className="btn-primary mt-8 inline-block">Tüm Koleksiyonlara Dön</Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold opacity-40 mb-12">
          <Link to="/">Ana Sayfa</Link>
          <ChevronRight size={12} />
          <Link to="/koleksiyonlar">Koleksiyonlar</Link>
          <ChevronRight size={12} />
          <span className="text-brand-ink">{collection.name}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold block"
            >
              Koleksiyon Detayı
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-serif"
            >
              {collection.name} <br /> <span className="serif-italic">Serisi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg opacity-60 font-light leading-relaxed max-w-lg"
            >
              {collection.description}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[16/9] overflow-hidden rounded-3xl shadow-xl"
          >
            <img src={`https://images.weserv.nl/?url=${collection.image}&w=1200&h=675&fit=cover`} alt={collection.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Patterns Grid */}
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b border-brand-beige pb-8">
            <h2 className="text-2xl font-serif">Desenler ({collectionProducts.length})</h2>
            <div className="flex items-center space-x-4 text-xs uppercase tracking-widest font-bold opacity-40">
              <span>Sırala:</span>
              <select className="bg-transparent focus:outline-none cursor-pointer">
                <option>En Yeni</option>
                <option>Fiyat: Düşükten Yükseğe</option>
                <option>Fiyat: Yüksekten Düşüğe</option>
              </select>
            </div>
          </div>

          {collectionProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {collectionProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center space-y-6">
              <p className="text-lg opacity-40 italic">Bu koleksiyona ait desenler yakında eklenecektir.</p>
              <Link to="/koleksiyonlar" className="btn-outline inline-block">Diğer Koleksiyonları Keşfet</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CollectionDetail;
