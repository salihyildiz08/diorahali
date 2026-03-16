import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { motion } from "motion/react";
import { Plus, Heart, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/urun/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-brand-cream/30 rounded-[40px] p-8">
        <img
          src={`https://images.weserv.nl/?url=${isHovered ? product.hoverImage : product.image}&w=800&h=1066&fit=contain&bg=ffffff`}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Quick Actions */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-ink hover:bg-brand-gold hover:text-white transition-all shadow-lg">
            <ShoppingBag size={18} />
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-ink hover:bg-brand-gold hover:text-white transition-all shadow-lg">
            <Heart size={18} />
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-ink hover:bg-brand-gold hover:text-white transition-all shadow-lg">
            <Plus size={18} />
          </button>
        </div>

        {/* Tag */}
        {product.isFeatured && (
          <div className="absolute top-6 left-6 bg-brand-gold text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2">
            Öne Çıkan
          </div>
        )}
      </Link>

      <div className="mt-8 space-y-2 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">
          {product.collection} Koleksiyonu
        </span>
        <h3 className="text-xl font-serif tracking-tight group-hover:text-brand-gold transition-colors">
          <Link to={`/urun/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="text-sm font-light opacity-60">{product.technique}</p>
        <div className="pt-2">
          <span className="text-sm font-bold tracking-widest">
            {product.price.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
