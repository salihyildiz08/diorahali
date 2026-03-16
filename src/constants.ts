import { Product, Collection } from "./types";

export const COLLECTIONS: Collection[] = [
  {
    id: "c1",
    name: "Babil",
    slug: "babil",
    description: "Mezopotamya'nın mistik ruhunu modern dokunuşlarla evinize taşıyan eşsiz bir seri.",
    image: "https://www.diorahali.com/upload/urunler/resim-942275.jpg"
  },
  {
    id: "c2",
    name: "Kumkapı",
    slug: "kumkapi",
    description: "Geleneksel motiflerin modern renklerle yeniden yorumlandığı, zerafetin simgesi.",
    image: "https://www.diorahali.com/upload/urunler/resim-203106.jpg"
  },
  {
    id: "c3",
    name: "Ethno Caliente",
    slug: "ethno-caliente",
    description: "Etnik desenlerin sıcaklığını ve enerjisini yaşam alanlarınıza taşıyan canlı bir koleksiyon.",
    image: "https://www.diorahali.com/upload/urunler/resim-598720.jpg"
  },
  {
    id: "c4",
    name: "Valerian",
    slug: "valerian",
    description: "Modern zamanların yeni klasikleri. Sade, şık and zamansız tasarımlar.",
    image: "https://www.diorahali.com/upload/urunler/resim-223621.jpg"
  },
  {
    id: "c5",
    name: "London",
    slug: "london",
    description: "Metropol yaşamının dinamizmini ve modernizmini yansıtan sofistike çizgiler.",
    image: "https://www.diorahali.com/upload/urunler/resim-20397.jpg"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Babil 9060-Y",
    slug: "babil-9060-y",
    collection: "Babil",
    description: "Babil serisinin en sevilen desenlerinden biri. Yumuşak tuşesi ve dayanıklı yapısıyla uzun ömürlü kullanım sunar.",
    price: 4850,
    image: "https://www.diorahali.com/upload/urunler/resim-942275.jpg",
    hoverImage: "https://www.diorahali.com/upload/urunler/resim-60657.jpg",
    material: "Akrilik & Pamuk",
    technique: "Yüksek Çözünürlüklü Dokuma",
    sizes: ["160x230", "200x290", "240x340"],
    colors: ["Bej", "Gri", "Antrasit"],
    care: "Düzenli olarak vakumlanmalı, leke durumunda profesyonel destek alınmalıdır.",
    isFeatured: true
  },
  {
    id: "p2",
    name: "Kumkapı 8078C",
    slug: "kumkapi-8078c",
    collection: "Kumkapı",
    description: "Kumkapı serisinin geleneksel dokusunu yansıtan, pastel tonlarıyla huzur veren bir tasarım.",
    price: 5250,
    image: "https://www.diorahali.com/upload/urunler/resim-203106.jpg",
    hoverImage: "https://www.diorahali.com/upload/urunler/resim-669001.jpg",
    material: "Yün & İpek Görünümlü Akrilik",
    technique: "Sık İlmekli Dokuma",
    sizes: ["160x230", "200x290"],
    colors: ["Krem", "Mavi"],
    care: "Profesyonel temizleme önerilir.",
    isFeatured: true
  },
  {
    id: "p3",
    name: "Ethno Caliente 2088-A",
    slug: "ethno-caliente-2088-a",
    collection: "Ethno Caliente",
    description: "Etnik desenlerin modern renklerle buluştuğu, dinamik ve enerjik bir parça.",
    price: 3950,
    image: "https://www.diorahali.com/upload/urunler/resim-598720.jpg",
    hoverImage: "https://www.diorahali.com/upload/urunler/resim-944242.jpg",
    material: "Polyester & Pamuk",
    technique: "Dijital Baskı Görünümlü Dokuma",
    sizes: ["120x180", "160x230"],
    colors: ["Turuncu", "Mavi", "Kırmızı"],
    care: "Makinede yıkanabilir (hassas program).",
    isFeatured: true
  },
  {
    id: "p4",
    name: "Valerian 7042-A",
    slug: "valerian-7042-a",
    collection: "Valerian",
    description: "Sadelikten gelen şıklık. Valerian serisiyle evinize modern bir dokunuş yapın.",
    price: 4600,
    image: "https://www.diorahali.com/upload/urunler/resim-223621.jpg",
    hoverImage: "https://www.diorahali.com/upload/urunler/resim-500438.jpg",
    material: "Mikrofiber Polyester",
    technique: "Yumuşak Tuşeli Dokuma",
    sizes: ["160x230", "200x290", "240x340"],
    colors: ["Gri", "Gümüş"],
    care: "Kolay temizlenebilir yapıdadır.",
    isFeatured: true
  },
  {
    id: "p5",
    name: "Babil 9057-Y",
    slug: "babil-9057-y",
    collection: "Babil",
    description: "Zerafetin ve kalitenin buluştuğu Babil deseni, yaşam alanlarınıza mistik bir hava katar.",
    price: 5100,
    image: "https://www.diorahali.com/upload/urunler/resim-60657.jpg",
    hoverImage: "https://www.diorahali.com/upload/urunler/resim-862998.jpg",
    material: "Akrilik & Pamuk",
    technique: "Yüksek Çözünürlüklü Dokuma",
    sizes: ["160x230", "200x290", "240x340"],
    colors: ["Krem", "Altın"],
    care: "Profesyonel temizleme önerilir.",
    isFeatured: false
  },
  {
    id: "p6",
    name: "Kumkapı 8053A",
    slug: "kumkapi-8053a",
    collection: "Kumkapı",
    description: "Klasik motiflerin en asil hali. Kumkapı 8053A ile saray ihtişamı evinizde.",
    price: 5800,
    image: "https://www.diorahali.com/upload/urunler/resim-540147.jpg",
    hoverImage: "https://www.diorahali.com/upload/urunler/resim-68898.jpg",
    material: "Yün & Akrilik",
    technique: "Geleneksel Dokuma",
    sizes: ["200x300", "240x340"],
    colors: ["Bordo", "Altın"],
    care: "Profesyonel temizleme.",
    isFeatured: false
  },
  {
    id: "p7",
    name: "Ethno Caliente 2090-A",
    slug: "ethno-caliente-2090-a",
    collection: "Ethno Caliente",
    description: "Geometrik formların ve canlı renklerin dansı. Modern evler için ideal.",
    price: 4100,
    image: "https://www.diorahali.com/upload/urunler/resim-433662.jpg",
    hoverImage: "https://www.diorahali.com/upload/urunler/resim-132511.jpg",
    material: "Polyester",
    technique: "Modern Dokuma",
    sizes: ["160x230", "200x290"],
    colors: ["Çok Renkli"],
    care: "Nemli bezle silinebilir.",
    isFeatured: false
  },
  {
    id: "p8",
    name: "Valerian 7044-B",
    slug: "valerian-7044-b",
    collection: "Valerian",
    description: "Minimalist dekorasyonun tamamlayıcısı. Valerian 7044-B ile ferah mekanlar.",
    price: 4750,
    image: "https://www.diorahali.com/upload/urunler/resim-289613.jpg",
    hoverImage: "https://www.diorahali.com/upload/urunler/resim-450276.jpg",
    material: "Akrilik",
    technique: "Yüksek Kalite Dokuma",
    sizes: ["160x230", "200x290"],
    colors: ["Antrasit", "Gri"],
    care: "Düzenli vakumlanmalıdır.",
    isFeatured: false
  }
];
