import Image from "next/image";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import HeroSection from "@/components/Hero";
import EditorsPick from "@/components/EditorsPick";
import BestSellerProducts from "@/components/BestSellerProducts";
import Universe from "@/components/Universe";
import ClassicProduct from "@/components/ClassicProduct";
import FeaturedPosts from "@/components/FeaturedPosts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeaderTop />
      <HeaderMain />
      <HeroSection />
      <EditorsPick />
      <BestSellerProducts />
      <ClassicProduct />
      <Universe />
      <FeaturedPosts />
      <Footer />
    </>
  );
}
