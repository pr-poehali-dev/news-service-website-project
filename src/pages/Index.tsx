import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BreakingNews from "@/components/BreakingNews";
import MainNews from "@/components/MainNews";
import LiveSection from "@/components/LiveSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BreakingNews />
      <MainNews />
      <LiveSection />
      <Footer />
    </div>
  );
};

export default Index;
