// =========================================================================
// products.js - নিশা ক্রিয়েশনস (Nisha Creations) প্রফেশনাল ক্যাটালগ
// মহিলা, পুরুষ, গিফট ও বাচ্চাদের সমৃদ্ধ কালেকশন
// =========================================================================

const INITIAL_PRODUCTS = [
  // 🌸 1. মহিলাদের কালেকশন (শাড়ি, কুর্তি, লেহেঙ্গা)
  {
    id: "NC-WOMEN-01",
    title: "খাঁটি ঢাকাই জামদানি শাড়ি (রয়্যাল ব্লু ও গোল্ডেন পাড়)",
    price: 799,
    mrp: 1999,
    upiOffer: 759,
    category: "women",
    type: "saree",
    fabric: "সুতি ও সিল্ক মিশ্রিত জামদানি",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80",
    desc: "ঐতিহ্যবাহী নিখুঁত হাতে বোনা ঢাকাই জামদানি শাড়ি। বিয়েবাড়ি ও পুজোর অঞ্জলির জন্য পারফেক্ট।",
    stock: 12,
    rating: 4.9,
    reviews: 24,
    colorVariants: [
      { name: "রয়্যাল ব্লু", code: "#1e3a8a", qty: 6, img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80" },
      { name: "মেরুন লাল", code: "#991b1b", qty: 6, img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80" }
    ],
    sizes: [{ size: "Free Size (6.5 Mtr)", price: 799, mrp: 1999, qty: 12 }]
  },
  {
    id: "NC-WOMEN-02",
    title: "ডিজাইনার রেডিমেড কুর্তি ও প্লাজো সেট (পিঙ্ক ও জরি কাজ)",
    price: 650,
    mrp: 1399,
    upiOffer: 618,
    category: "women",
    type: "kurti",
    fabric: "পিওর রেয়ন কটন",
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80",
    desc: "আরামদায়ক রেডিমেড কুর্তি সেট। অফিস, কলেজ ও আড্ডার জন্য ট্রেন্ডি লুক।",
    stock: 15,
    rating: 4.8,
    reviews: 18,
    colorVariants: [
      { name: "গোলাপি (Pink)", code: "#db2777", qty: 8, img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80" },
      { name: "হালকা নীল", code: "#0284c7", qty: 7, img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80" }
    ],
    sizes: [
      { size: "M (38)", price: 650, mrp: 1399, qty: 5 },
      { size: "L (40)", price: 650, mrp: 1399, qty: 5 },
      { size: "XL (42)", price: 650, mrp: 1399, qty: 5 }
    ]
  },
  {
    id: "NC-WOMEN-03",
    title: "ব্রাইডাল পার্টি লেহেঙ্গা ও ডিজাইনার ওড়না সেট",
    price: 1850,
    mrp: 3800,
    upiOffer: 1757,
    category: "women",
    type: "lehenga",
    fabric: "সেমি সিল্ক ও নেট জরি",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=80",
    desc: "বিয়েবাড়ি ও স্পেশাল পার্টির জন্য গর্জিয়াস ডিজাইনার লেহেঙ্গা সেট।",
    stock: 8,
    rating: 5.0,
    reviews: 12,
    colorVariants: [{ name: "মেরুন ব্রাইডাল", code: "#831843", qty: 8, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=80" }],
    sizes: [{ size: "Semi-Stitched", price: 1850, mrp: 3800, qty: 8 }]
  },

  // 👔 2. পুরুষদের কালেকশন (পাঞ্জাবি, শার্ট, কুর্তা)
  {
    id: "NC-MEN-01",
    title: "ঐতিহ্যবাহী সুতির ডিজাইনার পাঞ্জাবি (অফ-হোয়াইট ও সুতোর কাজ)",
    price: 599,
    mrp: 1299,
    upiOffer: 569,
    category: "men",
    type: "men",
    fabric: "১০০% প্রিমিয়াম সুতি (Cotton)",
    img: "https://images.unsplash.com/photo-1621644825946-b6058e382098?w=500&auto=format&fit=crop&q=80",
    desc: "বাঙালির পুজোর অঞ্জলি, ভাইফোঁটা বা বিয়েবাড়ির পারফেক্ট সুতি পাঞ্জাবি। আরামদায়ক ও ক্লাসিক লুক।",
    stock: 20,
    rating: 4.9,
    reviews: 16,
    colorVariants: [
      { name: "অফ-হোয়াইট", code: "#fef08a", qty: 10, img: "https://images.unsplash.com/photo-1621644825946-b6058e382098?w=500&auto=format&fit=crop&q=80" },
      { name: "রয়্যাল ব্লু", code: "#1e3a8a", qty: 10, img: "https://images.unsplash.com/photo-1621644825946-b6058e382098?w=500&auto=format&fit=crop&q=80" }
    ],
    sizes: [
      { size: "38 (M)", price: 599, mrp: 1299, qty: 7 },
      { size: "40 (L)", price: 599, mrp: 1299, qty: 7 },
      { size: "42 (XL)", price: 599, mrp: 1299, qty: 6 }
    ]
  },
  {
    id: "NC-MEN-02",
    title: "ফেস্টিভ কটন শর্ট কুর্তা (জিন্স ও প্যান্টের সাথে পরার জন্য)",
    price: 499,
    mrp: 999,
    upiOffer: 474,
    category: "men",
    type: "men",
    fabric: "স্ল্যাব কটন",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80",
    desc: "তরুণদের পছন্দের ট্রেন্ডি শর্ট কুর্তা। পুজোর আড্ডা ও ক্যাজুয়াল অনুষ্ঠানে দারুণ মানায়।",
    stock: 14,
    rating: 4.8,
    reviews: 9,
    colorVariants: [{ name: "নেভি ব্লু", code: "#0f172a", qty: 14, img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80" }],
    sizes: [
      { size: "38 (M)", price: 499, mrp: 999, qty: 5 },
      { size: "40 (L)", price: 499, mrp: 999, qty: 5 },
      { size: "42 (XL)", price: 499, mrp: 999, qty: 4 }
    ]
  },

  // 🎁 3. গিফট ও কম্বো কালেকশন (কাপল কম্বো, পারফিউম, গিফট হ্যাম্পার)
  {
    id: "NC-GIFT-01",
    title: "রয়্যাল কাপল কম্বো সেট: ম্যাচিং ঢাকাই শাড়ি + ডিজাইনার পাঞ্জাবি",
    price: 1399,
    mrp: 3200,
    upiOffer: 1329,
    category: "gift",
    type: "gift",
    fabric: "প্রিমিয়াম জামদানি কটন ও সিল্ক",
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80",
    desc: "পুজো, বিবাহবার্ষিকী বা অনুষ্ঠানে স্বামী-স্ত্রীর ম্যাচিং কাপল সেট। একসাথে শাড়ি ও পাঞ্জাবির চমৎকার কম্বিনেশন।",
    stock: 10,
    rating: 5.0,
    reviews: 31,
    colorVariants: [
      { name: "ম্যাচিং রয়্যাল ব্লু সেট", code: "#1e3a8a", qty: 5, img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80" },
      { name: "ম্যাচিং মেরুন সেট", code: "#831843", qty: 5, img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80" }
    ],
    sizes: [{ size: "শাড়ি (Free) + পাঞ্জাবি (40 L)", price: 1399, mrp: 3200, qty: 10 }]
  },
  {
    id: "NC-GIFT-02",
    title: "লাক্সারি পারফিউম ও লেদার ওয়ালেট গিফট হ্যাম্পার বক্স",
    price: 499,
    mrp: 1199,
    upiOffer: 474,
    category: "gift",
    type: "gift",
    fabric: "প্রিমিয়াম গিফট বক্স প্যাকিং",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=80",
    desc: "জন্মদিন বা যে কোনো উপহারের জন্য রেডিমেড লাক্সারি বক্স। সাথে প্রিমিয়াম সুগন্ধি ও জেনুইন ওয়ালেট।",
    stock: 15,
    rating: 4.8,
    reviews: 14,
    colorVariants: [{ name: "রয়েল ব্ল্যাক গিফট বক্স", code: "#111827", qty: 15, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=80" }],
    sizes: [{ size: "Standard Gift Pack", price: 499, mrp: 1199, qty: 15 }]
  },
  {
    id: "NC-GIFT-03",
    title: "ব্রাইডাল জুয়েলারি গিফট বক্স (চোকার নেকলেস, দুল ও আংটি সেট)",
    price: 450,
    mrp: 999,
    upiOffer: 427,
    category: "gift",
    type: "gift",
    fabric: "গোল্ড প্লেটেড কুন্দন জুয়েলারি",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80",
    desc: "বোন, স্ত্রী বা প্রিয়জনকে উপহার দেওয়ার জন্য রয়্যাল জুয়েলারি কম্বো সেট।",
    stock: 16,
    rating: 4.9,
    reviews: 20,
    colorVariants: [{ name: "সোনালী কুন্দন", code: "#eab308", qty: 16, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80" }],
    sizes: [{ size: "Complete Set Box", price: 450, mrp: 999, qty: 16 }]
  },

  // 👶 4. ছোটদের কালেকশন (বাচ্চাদের ফ্রক ও ড্রেস)
  {
    id: "NC-KIDS-01",
    title: "কিউট বেবি প্রিন্সেস ফেস্টিভ ফ্রক (হালকা গোলাপি ও ফ্লাওয়ার কাজ)",
    price: 420,
    mrp: 899,
    upiOffer: 399,
    category: "kids",
    type: "girls",
    fabric: "সফট নেট ও কটন ইনার",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop&q=80",
    desc: "বাচ্চাদের জন্য অত্যন্ত নরম ও আরামদায়ক উৎসবের ফ্রক। কোনো রকম চুলকানি বা অস্বস্তি হবে না।",
    stock: 18,
    rating: 4.9,
    reviews: 27,
    colorVariants: [
      { name: "গোলাপি", code: "#f472b6", qty: 10, img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop&q=80" },
      { name: "হালকা হলুদ", code: "#fef08a", qty: 8, img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop&q=80" }
    ],
    sizes: [
      { size: "২-৩ বছর", price: 420, mrp: 899, qty: 6 },
      { size: "৪-৫ বছর", price: 420, mrp: 899, qty: 6 },
      { size: "৬-৭ বছর", price: 450, mrp: 950, qty: 6 }
    ]
  },
  {
    id: "NC-KIDS-02",
    title: "ছোট ছেলেদের ফেস্টিভ কুর্তা ও ধুতি সেট",
    price: 450,
    mrp: 950,
    upiOffer: 427,
    category: "kids",
    type: "kids",
    fabric: "সুতি (Pure Cotton)",
    img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&auto=format&fit=crop&q=80",
    desc: "ছোট্ট সোনার জন্য পুজোর বিশেষ ধুতি-কুর্তা সেট। সহজেই পরা যায়।",
    stock: 12,
    rating: 4.8,
    reviews: 11,
    colorVariants: [{ name: "হলুদ ও লাল পাড়", code: "#eab308", qty: 12, img: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&auto=format&fit=crop&q=80" }],
    sizes: [
      { size: "২-৪ বছর", price: 450, mrp: 950, qty: 6 },
      { size: "৫-৭ বছর", price: 480, mrp: 999, qty: 6 }
    ]
  }
];
