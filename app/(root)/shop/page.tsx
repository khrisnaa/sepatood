import { getShoes } from '@/actions/shoes';
import { ShoeCard } from '@/app/(root)/shop/_componennts/shoe-card';

const Page = async () => {
  const shoes = await getShoes();
  return (
    <main className="flex flex-wrap items-center justify-center gap-4 py-8 sm:container">
      {shoes.map((data, i) => (
        <div className="w-[calc(50% - 1rem)] sm:w-[calc(33%-1rem)] lg:w-[calc(25%-1rem)]">
          <ShoeCard shoe={data} key={i} />
        </div>
      ))}
    </main>
  );
};
export default Page;
