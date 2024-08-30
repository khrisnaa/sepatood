import { getShoes } from '@/actions/shoes';
import { ShoeCard } from '@/app/(root)/shoes/_components/shoe-card';

const Page = async () => {
  const shoes = await getShoes();
  return (
    <div className="grid grid-cols-4">
      {shoes.map((item, i) => (
        <ShoeCard data={item} key={i} />
      ))}
    </div>
  );
};
export default Page;
