import React from "react";
import { motion } from "motion/react";
import { Award, Users, Globe, ShieldCheck, ArrowDown } from "lucide-react";

const About = () => {
  return (
    <main className="bg-white">
      {/* Hero Section - Editorial Style */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-540147.jpg"
            alt="Diora Halı Craftsmanship"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-ink/40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] uppercase tracking-[0.8em] text-brand-gold font-bold block mb-12"
            >
              Hikayemiz & Mirasımız
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl lg:text-[12vw] text-white font-serif leading-[0.85] mb-12"
            >
              Gelenekten <br /> <span className="serif-italic ml-[0.5em]">Geleceğe</span>
            </motion.h1>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-12 hidden lg:flex items-center space-x-6 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Keşfet</span>
          <ArrowDown size={16} />
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-brand-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl lg:text-6xl font-serif leading-tight">
                Gaziantep'in <span className="serif-italic">Dokuma Mirasını</span> Modern Tasarımla Buluşturuyoruz.
              </h2>
              <p className="text-xl opacity-70 font-light leading-relaxed">
                Diora Halı, 1994 yılından bu yana halı dokuma sanatının kalbi Gaziantep'te, 
                geleneksel ustalığı modern teknoloji ve tasarım vizyonuyla harmanlıyor. 
                Her bir düğümde kaliteyi, her bir desende estetiği ön planda tutuyoruz.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div>
                  <span className="text-4xl font-serif text-brand-gold block mb-2">30+</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Yıllık Tecrübe</span>
                </div>
                <div>
                  <span className="text-4xl font-serif text-brand-gold block mb-2">50+</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Ülkeye İhracat</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
                <img
                  src="https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-942275.jpg"
                  alt="Diora Halı Production"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-gold rounded-full -z-0 opacity-10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold">Değerlerimiz</span>
            <h2 className="text-4xl lg:text-6xl font-serif">Bizi Biz Yapan <span className="serif-italic">İlkeler</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="text-brand-gold" size={32} />,
                title: "Üstün Kalite",
                desc: "En iyi iplikler ve en son teknoloji dokuma teknikleri ile kusursuz üretim."
              },
              {
                icon: <Users className="text-brand-gold" size={32} />,
                title: "Müşteri Odaklı",
                desc: "Yaşam alanlarınız için en doğru ve estetik çözümleri sunma tutkusu."
              },
              {
                icon: <Globe className="text-brand-gold" size={32} />,
                title: "Global Vizyon",
                desc: "Gaziantep'ten dünyaya uzanan, sınır tanımayan bir tasarım ve satış ağı."
              },
              {
                icon: <ShieldCheck className="text-brand-gold" size={32} />,
                title: "Güvenilir Marka",
                desc: "Yılların tecrübesi ve sarsılmaz dürüstlük ilkesiyle inşa edilen güven."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-12 border border-brand-beige rounded-[40px] hover:bg-brand-cream/30 transition-all duration-500 group"
              >
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{value.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="section-padding bg-brand-ink text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold">Vizyon & Misyon</span>
              <h2 className="text-5xl lg:text-7xl font-serif leading-none">Geleceği <br /><span className="serif-italic">Dokuyoruz</span></h2>
            </div>
            <div className="space-y-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-brand-gold">Misyonumuz</h3>
                <p className="text-xl opacity-70 font-light leading-relaxed">
                  Her eve estetik, konfor ve kaliteyi ulaştırmak; halı dokuma sanatını modern 
                  yaşamın bir parçası haline getirerek gelecek nesillere aktarmaktır.
                </p>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-brand-gold">Vizyonumuz</h3>
                <p className="text-xl opacity-70 font-light leading-relaxed">
                  Yenilikçi tasarımlarımız ve sürdürülebilir üretim anlayışımızla, dünya halı 
                  sektöründe öncü ve ilham veren bir marka olmaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
