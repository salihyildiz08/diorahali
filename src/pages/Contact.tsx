import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-40 pb-32 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold block"
              >
                İletişim
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl lg:text-8xl font-serif leading-none"
              >
                Bize <br /> <span className="serif-italic">Ulaşın</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl opacity-60 font-light leading-relaxed max-w-md"
              >
                Yaşam alanlarınız için en doğru halıyı seçmenize yardımcı olalım. 
                Uzman ekibimiz her türlü sorunuz için hazır.
              </motion.p>
            </div>

            <div className="space-y-10">
              {[
                {
                  icon: <MapPin size={24} />,
                  title: "Genel Merkez",
                  detail: "Başpınar (Organize) OSB Mah. O.S.B. 4. Bölge 83414 Nolu Cd. No:1 Şehitkamil/Gaziantep"
                },
                {
                  icon: <Phone size={24} />,
                  title: "Telefon",
                  detail: "+90 (342) 357 05 05"
                },
                {
                  icon: <Mail size={24} />,
                  title: "E-posta",
                  detail: "info@diorahali.com"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-8 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-gold shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs uppercase tracking-widest font-bold opacity-40">{item.title}</h4>
                    <p className="text-lg font-serif">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 space-y-8">
              <h4 className="text-xs uppercase tracking-widest font-bold opacity-40">Sosyal Medya</h4>
              <div className="flex items-center space-x-8">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-brand-gold hover:text-brand-gold transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-12 lg:p-20 rounded-[60px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cream/50 rounded-bl-full -mr-10 -mt-10" />
            
            <form className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Adınız Soyadınız</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-gold transition-colors font-light text-lg"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">E-posta Adresiniz</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-gold transition-colors font-light text-lg"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Konu</label>
                <input
                  type="text"
                  placeholder="Nasıl yardımcı olabiliriz?"
                  className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-gold transition-colors font-light text-lg"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Mesajınız</label>
                <textarea
                  rows={4}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full bg-transparent border-b border-brand-ink/10 py-4 focus:outline-none focus:border-brand-gold transition-colors resize-none font-light text-lg"
                />
              </div>
              <button type="submit" className="group relative w-full py-6 bg-brand-ink text-white rounded-full overflow-hidden transition-all hover:shadow-2xl active:scale-[0.98]">
                <span className="relative z-10 flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.4em] font-bold">
                  <span>Mesaj Gönder</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
