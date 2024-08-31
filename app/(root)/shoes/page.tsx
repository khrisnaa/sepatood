import { getShoes } from '@/actions/shoes';
import { ShoeCard } from '@/app/(root)/shoes/_components/shoe-card';
import { TestLayout } from '@/app/(root)/shoes/_components/test-layout';
import Image from 'next/image';

const Page = async () => {
  // const shoes = await getShoes();
  return (
    // <div className="flex gap-24 p-24">
    //   {/* {shoes.map((item, i) => (
    //     <ShoeCard data={item} key={i} />
    //   ))} */}

    //   <div className="h-24 w-24 bg-red-500 p-4 text-green-500">
    //     <Image
    //       src="/logos/nike-logo.svg"
    //       height={150}
    //       width={150}
    //       alt="logo"
    //       className="w-full bg-red-800 bg-cover text-green-500"
    //     />
    //   </div>
    //   <div className="h-24 w-24 bg-red-500 bg-[url('/logos/nike-logo.svg')] bg-contain bg-center bg-no-repeat text-red-500" />
    //   <div className="h-24 w-24 bg-red-500 p-4">
    //     <Image
    //       src="/logos/converse-logo-w.svg"
    //       height={150}
    //       width={150}
    //       alt="logo"
    //       className="w-full bg-red-800 bg-cover text-green-500"
    //     />
    //   </div>
    //   <div className="h-24 w-24 bg-red-500" />
    // </div>
    <div className="space-y-8">
      <div className="flex h-[40rem] w-full">
        <TestLayout>XXX</TestLayout>
        <div className="flex-1 bg-yellow-500">Hello World</div>
      </div>
    </div>
  );
};
export default Page;
