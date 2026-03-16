import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    lifestyle: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    product: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-942275.jpg&w=1000&h=1000&fit=contain&bg=ffffff",
    title: "Babil",
    subtitle: "Koleksiyonu",
    desc: "Geleneksel motiflerin modern dokunuşlarla yeniden yorumlandığı, evinizin karakterini yansıtan eşsiz bir seri."
  },
  {
    lifestyle: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
    product: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-203106.jpg&w=1000&h=1000&fit=contain&bg=ffffff",
    title: "Kumkapı",
    subtitle: "Serisi",
    desc: "Saray zerafetini modern yaşam alanlarınıza taşıyan, ince işçiliğiyle göz kamaştıran tasarımlar."
  },
  {
    lifestyle: "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?q=80&w=2000&auto=format&fit=crop",
    product: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-598720.jpg&w=1000&h=1000&fit=contain&bg=ffffff",
    title: "Ethno",
    subtitle: "Caliente",
    desc: "Doğal dokuların sıcak renklerle buluştuğu, mekanlarınıza enerji ve konfor katan bohem bir dokunuş."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F9F9F7]">
      <div className="flex h-full w-full flex-col lg:flex-row">
        
        {/* Left Side: Lifestyle Image (Full Height on Desktop) */}
        <div className="relative h-1/2 w-full lg:h-full lg:w-1/2 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`lifestyle-${current}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={SLIDES[current].lifestyle}
                alt="Diora Interior"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-ink/20" />
            </motion.div>
          </AnimatePresence>
          
          {/* Brand Mark */}
          <div className="absolute left-12 top-32 z-20 hidden lg:block">
            <span className="text-[10px] uppercase tracking-[1em] text-white font-bold opacity-80">
              EST. 1994 — DIORA CARPET
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-12 left-12 z-20 flex items-center space-x-6">
            <button onClick={prev} className="w-14 h-14 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-ink transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side: Content & Product Showcase */}
        <div className="relative h-1/2 w-full lg:h-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 bg-white">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] uppercase tracking-[0.8em] text-brand-gold font-bold block"
                >
                  Koleksiyon Keşfi
                </motion.span>
                <h1 className="text-6xl lg:text-[90px] font-serif leading-none text-brand-ink">
                  {SLIDES[current].title} <br />
                  <span className="serif-italic text-brand-gold">{SLIDES[current].subtitle}</span>
                </h1>
              </div>

              <p className="text-lg text-brand-ink/60 font-light leading-relaxed max-w-md">
                {SLIDES[current].desc}
              </p>

              <div className="flex items-center space-x-8 pt-4">
                <Link to="/koleksiyonlar" className="btn-primary bg-brand-ink text-white hover:bg-brand-gold px-12 py-5 text-sm">
                  Koleksiyonu İncele
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Product Floating Frame */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden xl:block w-96 h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={`product-${current}`}
                initial={{ opacity: 0, x: 100, rotate: 10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -100, rotate: -10 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-white shadow-2xl rounded-3xl p-8 border border-brand-cream"
              >
                <img
                  src={SLIDES[current].product}
                  alt="Product Detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-12 right-12 flex items-center space-x-4">
            <span className="text-xs font-mono tracking-widest text-brand-ink/40">0{current + 1}</span>
            <div className="w-32 h-px bg-brand-ink/10 relative">
              <motion.div
                key={current}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-brand-gold"
              />
            </div>
            <span className="text-xs font-mono tracking-widest text-brand-ink/40">0{SLIDES.length}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
