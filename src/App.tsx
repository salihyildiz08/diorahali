import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetail";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Inspiration from "./pages/Inspiration";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/koleksiyonlar" element={<Collections />} />
            <Route path="/koleksiyon/:slug" element={<CollectionDetail />} />
            <Route path="/urun/:slug" element={<ProductDetail />} />
            <Route path="/hikayemiz" element={<About />} />
            <Route path="/ilham" element={<Inspiration />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
