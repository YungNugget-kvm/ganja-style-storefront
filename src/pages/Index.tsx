import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";
import { ProductSection } from "@/components/ProductSection";
import thcaFlower1 from "@/assets/thca-flower-1.jpg";
import thcaFlower2 from "@/assets/thca-flower-2.jpg";
import vapePen1 from "@/assets/vape-pen-1.jpg";
import gummies1 from "@/assets/gummies-1.jpg";
import tincture1 from "@/assets/tincture-1.jpg";

const Index = () => {
  const thcaFlowerProducts = [
    {
      id: 1,
      name: "Runtz THCA Flower",
      image: thcaFlower1,
      rating: 5,
      reviewCount: 39,
      price: "$35.00",
      originalPrice: "$89.00"
    },
    {
      id: 2,
      name: "Gush Mints Smalls THCA Flower",
      image: thcaFlower2,
      rating: 5,
      reviewCount: 9,
      price: "$39.00"
    },
    {
      id: 3,
      name: "Lemon Cherry Gelato THCA Flower",
      image: thcaFlower1,
      rating: 5,
      reviewCount: 9,
      price: "$29.00",
      originalPrice: "$79.00"
    },
    {
      id: 4,
      name: "Banana Kush THCA Flower",
      image: thcaFlower2,
      rating: 5,
      reviewCount: 5,
      price: "$29.00",
      originalPrice: "$79.00"
    },
    {
      id: 5,
      name: "GovernMint Oasis Smalls THCA Flower",
      image: thcaFlower1,
      rating: 5,
      reviewCount: 3,
      price: "$39.00"
    }
  ];

  const vapeProducts = [
    {
      id: 6,
      name: "Premium CBD Vape Pen",
      image: vapePen1,
      rating: 5,
      reviewCount: 24,
      price: "$49.99",
      originalPrice: "$69.99"
    },
    {
      id: 7,
      name: "Delta-8 Cartridge",
      image: vapePen1,
      rating: 4,
      reviewCount: 18,
      price: "$39.99"
    },
    {
      id: 8,
      name: "Full Spectrum Vape Cart",
      image: vapePen1,
      rating: 5,
      reviewCount: 31,
      price: "$44.99"
    }
  ];

  const edibleProducts = [
    {
      id: 9,
      name: "Mixed Berry Gummies",
      image: gummies1,
      rating: 5,
      reviewCount: 67,
      price: "$24.99"
    },
    {
      id: 10,
      name: "Full Spectrum Tincture",
      image: tincture1,
      rating: 5,
      reviewCount: 45,
      price: "$59.99"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <InfoSection />
      
      <ProductSection 
        title="THCA Flower" 
        products={thcaFlowerProducts}
      />
      
      <ProductSection 
        title="Vape Products" 
        products={vapeProducts}
      />
      
      <ProductSection 
        title="Edibles & Wellness" 
        products={edibleProducts}
        showMore={false}
      />
    </div>
  );
};

export default Index;
