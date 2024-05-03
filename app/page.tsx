import BestSellers from "./components/bestsellers/BestSellers";
import Blog from "./components/blog/Blog";
import NewArrivals from "./components/newarrivals/NewArrivals";
import News from "./components/newscollection/News";
import Accessories from "./components/main/Accessories";
import Hero from "./components/main/Hero";
import Collection from "./components/main/Collection";
import History from "./components/main/History";

export default function Home() {
  return (
    <div>
      <Hero />
      <Accessories />
      <Collection />
      <BestSellers />
      <History />
      <NewArrivals />
      <Blog />
      <News />
    </div>
  );
}
