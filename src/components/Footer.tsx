import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-brand-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-[0.2em] uppercase">
                Diora
              </span>
              <span className="text-xs tracking-[0.5em] uppercase text-brand-gold font-medium -mt-1">
                Halı
              </span>
            </Link>
            <p className="text-sm opacity-60 leading-relaxed font-light">
              Geleneksel dokuma sanatını modern tasarım vizyonuyla birleştirerek, yaşam alanlarınıza zamansız bir zerafet katıyoruz.
            </p>
            <div className="flex items-center space-x-6">
              <Instagram size={20} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <Facebook size={20} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <Twitter size={20} className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Hızlı Linkler</h4>
            <ul className="space-y-4">
              <li><Link to="/koleksiyonlar" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">Koleksiyonlar</Link></li>
              <li><Link to="/hikayemiz" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">Hikayemiz</Link></li>
              <li><Link to="/ilham" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">İç Mekan İlhamı</Link></li>
              <li><Link to="/blog" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">Blog</Link></li>
              <li><Link to="/iletisim" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">İletişim</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Koleksiyonlar</h4>
            <ul className="space-y-4">
              <li><Link to="/koleksiyon/modern" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">Modern Halılar</Link></li>
              <li><Link to="/koleksiyon/klasik" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">Klasik Halılar</Link></li>
              <li><Link to="/koleksiyon/vintage" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">Vintage Halılar</Link></li>
              <li><Link to="/koleksiyon/el-dokuma" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">El Dokuma Halılar</Link></li>
              <li><Link to="/koleksiyon/ozel" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-light">Özel Koleksiyonlar</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">İletişim</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-brand-gold shrink-0" />
                <span className="text-sm opacity-60 font-light leading-relaxed">
                  Gaziantep Organize Sanayi Bölgesi, 4. Bölge, Türkiye
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span className="text-sm opacity-60 font-light">+90 (342) 357 05 05</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span className="text-sm opacity-60 font-light">info@diorahali.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-[10px] uppercase tracking-widest opacity-40">
          <p>© 2024 Diora Halı. Tüm Hakları Saklıdır.</p>
          <div className="flex items-center space-x-8">
            <Link to="/gizlilik">Gizlilik Politikası</Link>
            <Link to="/kullanim">Kullanım Şartları</Link>
            <Link to="/kvkk">KVKK</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
