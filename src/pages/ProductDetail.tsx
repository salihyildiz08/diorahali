import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { PRODUCTS } from "../constants";
import { Heart, Share2, Ruler, ShieldCheck, Truck, RefreshCw, ChevronRight, Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-serif">Ürün Bulunamadı</h1>
        <Link to="/" className="btn-primary mt-8 inline-block">Ana Sayfaya Dön</Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold opacity-40 mb-12">
          <Link to="/">Ana Sayfa</Link>
          <ChevronRight size={12} />
          <Link to="/koleksiyonlar">Koleksiyonlar</Link>
          <ChevronRight size={12} />
          <span className="text-brand-ink">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[3/4] overflow-hidden bg-brand-beige"
            >
              <img src={`https://images.weserv.nl/?url=${product.image}&w=1200&h=1600&fit=contain&bg=ffffff`} alt={product.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square overflow-hidden bg-brand-beige cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={`https://images.weserv.nl/?url=${product.image}&w=400&h=400&fit=contain&bg=ffffff`} alt={product.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-brand-gold font-bold">
                  {product.collection} Koleksiyonu
                </span>
                <div className="flex items-center space-x-4">
                  <button className="text-brand-ink hover:text-brand-gold transition-colors"><Heart size={20} /></button>
                  <button className="text-brand-ink hover:text-brand-gold transition-colors"><Share2 size={20} /></button>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif tracking-tight">{product.name}</h1>
              <p className="text-2xl font-serif text-brand-gold">
                {product.price.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}
              </p>
              <p className="text-lg font-light opacity-60 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Sizes */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase tracking-widest font-bold">Ebat Seçimi</h4>
                <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                  <Ruler size={14} />
                  <span>Ebat Rehberi</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 border text-xs uppercase tracking-widest font-bold transition-all ${
                      selectedSize === size
                        ? "border-brand-ink bg-brand-ink text-white"
                        : "border-brand-beige hover:border-brand-ink"
                    }`}
                  >
                    {size} cm
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-brand-beige">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-brand-cream transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-brand-cream transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button className="flex-1 btn-primary py-5">Sepete Ekle</button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-brand-beige">
              <div className="flex items-start space-x-4">
                <ShieldCheck size={24} className="text-brand-gold shrink-0" />
                <div className="space-y-1">
                  <h5 className="text-xs uppercase tracking-widest font-bold">2 Yıl Garanti</h5>
                  <p className="text-[10px] opacity-60">Üretim hatalarına karşı tam güvence.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Truck size={24} className="text-brand-gold shrink-0" />
                <div className="space-y-1">
                  <h5 className="text-xs uppercase tracking-widest font-bold">Ücretsiz Kargo</h5>
                  <p className="text-[10px] opacity-60">Tüm Türkiye'ye sigortalı gönderim.</p>
                </div>
              </div>
            </div>

            {/* Tabs / Info */}
            <div className="space-y-8 pt-12 border-t border-brand-beige">
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h5 className="text-xs uppercase tracking-widest font-bold">Malzeme</h5>
                  <p className="text-sm font-light opacity-60">{product.material}</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-xs uppercase tracking-widest font-bold">Teknik</h5>
                  <p className="text-sm font-light opacity-60">{product.technique}</p>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-xs uppercase tracking-widest font-bold">Bakım Önerisi</h5>
                <p className="text-sm font-light opacity-60">{product.care}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
