import { getShoes } from '@/actions/shoes';
import { ShoesCarousel } from '@/components/product/shoes-carousel';

export const FeaturedShoesSection = async () => {
  const shoes = await getShoes();
  return (
    <div>
      <ShoesCarousel title="New article" shoes={shoes} />
      <ShoesCarousel title="New article" shoes={shoes} />
    </div>
  );
};
