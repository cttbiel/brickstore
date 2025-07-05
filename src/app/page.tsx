import { Hero } from "@/components/hero";
import { FeaturedCategories } from "@/components/featured-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
}
