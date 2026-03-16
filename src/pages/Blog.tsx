import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Salon İçin Doğru Halı Seçimi: Boyut, Renk ve Doku Rehberi",
    excerpt: "Evinizin en çok kullanılan alanı olan salonunuz için halı seçerken dikkat etmeniz gereken kritik noktaları keşfedin.",
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-942275.jpg",
    date: "12 Mart 2024",
    author: "Diora Tasarım Ekibi",
    category: "Rehber"
  },
  {
    id: 2,
    title: "2024 Modern Halı Trendleri: Minimalizm ve Doğallık",
    excerpt: "Bu yılın dekorasyon trendlerinde öne çıkan doğal dokular ve minimalist desenler halı dünyasını nasıl şekillendiriyor?",
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-203106.jpg",
    date: "05 Mart 2024",
    author: "Zeynep Aras",
    category: "Trend"
  },
  {
    id: 3,
    title: "El Dokuma Halı Bakımı: Uzun Ömürlü Kullanım İçin İpuçları",
    excerpt: "Değerli el dokuma halılarınızın ilk günkü güzelliğini koruması için yapmanız gereken periyodik bakım rutinleri.",
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-598720.jpg",
    date: "28 Şubat 2024",
    author: "Halı Uzmanı",
    category: "Bakım"
  },
  {
    id: 4,
    title: "Antialerjik Halılar: Sağlıklı Bir Ev İçin Doğru Tercih",
    excerpt: "Alerji hassasiyeti olanlar için özel olarak üretilen antialerjik halıların özellikleri ve faydaları.",
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-223621.jpg",
    date: "15 Şubat 2024",
    author: "Diora Sağlık",
    category: "Sağlık"
  },
  {
    id: 5,
    title: "Gaziantep'ten Dünyaya: Bir Dokuma Hikayesi",
    excerpt: "Diora Halı'nın Başpınar'daki modern tesislerinden dünyanın dört bir yanına uzanan başarı yolculuğu.",
    image: "https://images.weserv.nl/?url=https://www.diorahali.com/upload/urunler/resim-540147.jpg",
    date: "02 Şubat 2024",
    author: "Kurumsal",
    category: "Haberler"
  }
];

const Blog = () => {
  return (
    <main className="pt-40 pb-32 bg-brand-cream/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.6em] text-brand-gold font-bold"
          >
            Diora Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-serif"
          >
            Halı <span className="serif-italic">Kültürü</span> & Yaşam
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 group cursor-pointer"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-[40px] mb-8">
              <img
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-8 left-8 bg-white px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                {BLOG_POSTS[0].category}
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-8 text-[10px] uppercase tracking-widest font-bold opacity-40">
                <span className="flex items-center space-x-2">
                  <Calendar size={14} />
                  <span>{BLOG_POSTS[0].date}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <User size={14} />
                  <span>{BLOG_POSTS[0].author}</span>
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif group-hover:text-brand-gold transition-colors leading-tight">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-lg opacity-60 font-light leading-relaxed max-w-2xl">
                {BLOG_POSTS[0].excerpt}
              </p>
              <Link to="/blog" className="inline-flex items-center space-x-4 text-xs uppercase tracking-[0.4em] font-bold border-b border-brand-ink pb-2 group-hover:border-brand-gold group-hover:text-brand-gold transition-all">
                <span>Okumaya Devam Et</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Sidebar Posts */}
          <div className="space-y-12">
            {BLOG_POSTS.slice(1, 4).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col space-y-6"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-brand-beige rounded-full" />
                    <span className="opacity-40">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif group-hover:text-brand-gold transition-colors">
                    {post.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* More Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-32 pt-32 border-t border-brand-beige">
          {BLOG_POSTS.slice(3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer space-y-8"
            >
              <div className="aspect-square overflow-hidden rounded-[40px]">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <div className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                  {post.category}
                </div>
                <h3 className="text-2xl font-serif group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm opacity-60 font-light leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
