import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsTickerBar from "@/components/NewsTickerBar";
import BreakingNews from "@/components/BreakingNews";
import MainNews from "@/components/MainNews";
import LiveBroadcasts from "@/components/LiveBroadcasts";
import LiveSection from "@/components/LiveSection";
import BulletinBoard from "@/components/BulletinBoard";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NewsTickerBar />
      <Hero />
      <BreakingNews />
      <MainNews />
      <LiveBroadcasts />
      <LiveSection />
      <BulletinBoard />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Index;