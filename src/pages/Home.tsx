import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote, Instagram, Play } from "lucide-react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { COLLECTIONS, PRODUCTS } from "../constants";

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />

      {/* 2. Collections Section - Magazine Style */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 space-y-8 lg:space-y-0">
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.8em] text-brand-gold font-bold block"
              >
                Koleksiyonlar
              </motion.span>
              <h2 className="text-6xl lg:text-8xl font-serif leading-[0.9]">
                Zerafetin <br /> <span className="serif-italic">Tüm Renkleri</span>
              </h2>
            </div>
            <Link to="/koleksiyonlar" className="group flex items-center space-x-6 text-xs uppercase tracking-[0.4em] font-bold">
              <span>Tümünü Keşfet</span>
              <div className="w-16 h-px bg-brand-ink group-hover:w-24 transition-all duration-700" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {COLLECTIONS.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[60px] mb-12 shadow-2xl shadow-brand-ink/5">
                  <img
                    src={`https://images.weserv.nl/?url=${collection.image}&w=1000&h=1250&fit=cover`}
                    alt={collection.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-brand-ink/30 transition-colors duration-1000" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100">
                    <ArrowRight size={32} />
                  </div>

                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="bg-white/95 backdrop-blur-md p-10 rounded-[40px] translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000">
                      <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-4">Seri 0{index + 1}</p>
                      <h3 className="text-4xl font-serif text-brand-ink mb-4">{collection.name}</h3>
                      <p className="text-sm opacity-60 font-light leading-relaxed line-clamp-2">
                        {collection.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products - Minimalist Grid */}
      <section className="section-padding bg-brand-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-32 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.8em] text-brand-gold font-bold">Öne Çıkanlar</span>
            <h2 className="text-6xl lg:text-8xl font-serif">En Çok <span className="serif-italic">Beğenilenler</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
            {PRODUCTS.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand Story - Split Editorial */}
      <section className="py-48 bg-brand-ink text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-10">
                <span className="text-[10px] uppercase tracking-[0.8em] text-brand-gold font-bold">Mirasımız</span>
                <h2 className="text-7xl lg:text-[10vw] font-serif leading-[0.8] tracking-tighter">
                  Geleneksel <br /> <span className="serif-italic text-brand-gold">Ruh</span> <br /> Modern Vizyon
                </h2>
                <p className="text-2xl opacity-60 font-light leading-relaxed max-w-xl">
                  Diora Halı, Gaziantep'in köklü dokuma kültürünü dünya standartlarında bir tasarım anlayışıyla harmanlıyor. Her bir ilmekte sabır, her bir desende bir hikaye gizli.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-16">
                <div className="space-y-4">
                  <span className="text-6xl font-serif text-brand-gold block">30+</span>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Yıllık Tecrübe</p>
                </div>
                <div className="space-y-4">
                  <span className="text-6xl font-serif text-brand-gold block">50+</span>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Ülkeye İhracat</p>
                </div>
              </div>

              <Link to="/hikayemiz" className="group inline-flex items-center space-x-8">
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold transition-all duration-700">
                  <ArrowRight size={32} />
                </div>
                <span className="text-xs uppercase tracking-[0.6em] font-bold">Hikayemizi Keşfedin</span>
              </Link>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="aspect-[3/4] rounded-[80px] overflow-hidden mt-32 shadow-2xl"
                >
                  <img
                    src="https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-942275.jpg&w=800&h=1066&fit=cover"
                    alt="Craftsmanship"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-110 hover:scale-100"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="aspect-[3/4] rounded-[80px] overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-203106.jpg&w=800&h=1066&fit=cover"
                    alt="Modern Design"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-110 hover:scale-100"
                  />
                </motion.div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[25vw] font-serif font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none leading-none">
          DIORA HERITAGE
        </div>
      </section>

      {/* 5. Interior Inspiration - Editorial Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 space-y-8 lg:space-y-0">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.8em] text-brand-gold font-bold">İlham Alın</span>
              <h2 className="text-6xl lg:text-8xl font-serif leading-none">
                Yaşam <span className="serif-italic">Alanlarından</span> Kareler
              </h2>
            </div>
            <Link to="/ilham" className="group flex items-center space-x-6 text-xs uppercase tracking-[0.4em] font-bold border-b border-brand-ink pb-4 hover:border-brand-gold hover:text-brand-gold transition-all">
              <span>Galeriyi Gör</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-4 gap-12 space-y-12">
            {[
              "resim-942275.jpg",
              "resim-203106.jpg",
              "resim-598720.jpg",
              "resim-223621.jpg",
              "resim-669001.jpg",
              "resim-944242.jpg",
              "resim-500438.jpg",
              "resim-540147.jpg"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="relative group overflow-hidden rounded-[40px] break-inside-avoid shadow-xl shadow-brand-ink/5"
              >
                <img
                  src={`https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/${img}&w=600&h=800&fit=cover`}
                  alt={`Inspiration ${i}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <Instagram size={40} className="text-white scale-50 group-hover:scale-100 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials - Refined */}
      <section className="section-padding bg-brand-cream/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-center">
            <div className="space-y-10">
              <span className="text-[10px] uppercase tracking-[0.8em] text-brand-gold font-bold">Müşteri Deneyimleri</span>
              <h2 className="text-5xl lg:text-7xl font-serif leading-tight">Sizin <span className="serif-italic">Gözünüzden</span> Diora</h2>
              <div className="flex items-center space-x-3 text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { name: "Selin Yılmaz", comment: "Halıların dokusu ve kalitesi inanılmaz. Salonumun havası bir anda değişti. Kesinlikle tavsiye ediyorum." },
                { name: "Murat Kaya", comment: "Modern koleksiyon tam istediğim gibi minimalist ve şık. Paketleme ve teslimat süreci de çok profesyoneldi." }
              ].map((t, i) => (
                <div key={i} className="bg-white p-16 rounded-[50px] space-y-8 shadow-2xl shadow-brand-ink/5 relative overflow-hidden group">
                  <Quote size={80} className="absolute -top-4 -right-4 text-brand-gold opacity-[0.05] group-hover:scale-110 transition-transform duration-1000" />
                  <p className="text-2xl font-light italic opacity-70 leading-relaxed relative z-10">"{t.comment}"</p>
                  <div className="pt-8 border-t border-brand-beige">
                    <h4 className="text-sm uppercase tracking-[0.2em] font-bold">{t.name}</h4>
                    <span className="text-[10px] opacity-40 uppercase tracking-widest">Doğrulanmış Müşteri</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Blog Section - Editorial */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 space-y-8 lg:space-y-0">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.8em] text-brand-gold font-bold">Faydalı Bilgiler</span>
              <h2 className="text-6xl lg:text-8xl font-serif">Halı <span className="serif-italic">Kültürü</span></h2>
            </div>
            <Link to="/blog" className="group flex items-center space-x-6 text-xs uppercase tracking-[0.4em] font-bold">
              <span>Tüm Yazılar</span>
              <div className="w-16 h-px bg-brand-ink group-hover:w-24 transition-all duration-700" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Salon İçin Doğru Halı Seçimi", category: "Rehber", date: "12 Mart 2024", img: "resim-942275.jpg" },
              { title: "Modern Halı Trendleri 2024", category: "Trend", date: "05 Mart 2024", img: "resim-203106.jpg" },
              { title: "El Dokuma Halı Bakımı", category: "Bakım", date: "28 Şubat 2024", img: "resim-598720.jpg" }
            ].map((post, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer space-y-10"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[40px] shadow-xl shadow-brand-ink/5">
                  <img 
                    src={`https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/${post.img}&w=800&h=500&fit=cover`} 
                    alt={post.title} 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                  />
                </div>
                <div className="space-y-6 px-4">
                  <div className="flex items-center space-x-6 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold">
                    <span>{post.category}</span>
                    <span className="w-1.5 h-1.5 bg-brand-beige rounded-full" />
                    <span className="opacity-40">{post.date}</span>
                  </div>
                  <h3 className="text-3xl font-serif group-hover:text-brand-gold transition-colors leading-tight">{post.title}</h3>
                  <Link to="/blog" className="inline-flex items-center space-x-4 text-xs uppercase tracking-[0.4em] font-bold border-b border-brand-ink pb-2 group-hover:border-brand-gold group-hover:text-brand-gold transition-all">
                    <span>Devamını Oku</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Instagram Section - Minimalist */}
      <section className="py-24 bg-brand-cream/30 border-y border-brand-beige/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
          <div className="flex items-center space-x-10">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl shadow-brand-ink/5">
              <Instagram size={40} className="text-brand-gold" />
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-serif tracking-tight">Bizi Instagram'da Takip Edin</h4>
              <p className="text-xs opacity-40 font-light tracking-[0.4em] uppercase">@diorahali #diorahali</p>
            </div>
          </div>
          <a 
            href="https://instagram.com/diorahali" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary bg-brand-ink text-white hover:bg-brand-gold px-12"
          >
            Takip Et
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
