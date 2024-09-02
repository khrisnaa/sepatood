'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Brand, Category, Color } from '@prisma/client';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

interface FilterProps {
  data: (Brand | Color | Category)[];
  name: string;
  valueKey: string;
}

export const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    //object
    const current = qs.parse(searchParams.toString());

    //push new query to exsiting object
    const query = {
      ...current,
      [valueKey]: id,
    };

    //toggle button
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    //string
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="font-anton text-xl uppercase">{name}</h3>
      <div className="flex w-full max-w-xs flex-wrap gap-4">
        {data.map((item, i) => (
          <Button
            variant={'flatSecondary'}
            className={cn(
              'w-[calc(33%-1rem)] rounded-none sm:w-[calc(50%-1rem)]',
              selectedValue === item.id && 'bg-primary text-secondary',
            )}
            key={i}
            onClick={() => onClick(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const selectedValue = searchParams.get(valueKey);

//   const onClick = (id: string) => {
//     //currrent url
//     const current = qs.parse(searchParams.toString());

//     //add new filter to current url
//     const query = {
//       ...current,
//       [valueKey]: id,
//     };

//     if (current[valueKey] === id) {
//       query[valueKey] = null;
//     }

//     const url = qs.stringifyUrl(
//       {
//         url: window.location.href,
//         query,
//       },
//       { skipNull: true },
//     );

//     router.push(url);
//   };

//   return (
//     <div className="mb-8">
//       <h3 className="text-lg font-semibold">{name}</h3>
//       <hr className="my-4" />
//       <div className="flex flex-wrap gap-2">
//         {data.map((filter) => (
//           <div key={filter.id} className="flex items-center">
//             <Button
//               onClick={() => onClick(filter.id)}
//               className={cn(
//                 'rounded-md border !border-gray-300 !bg-white p-2 text-sm !text-gray-900',
//                 selectedValue === filter.id && '!bg-black !text-white',
//               )}
//             >
//               {filter.name}
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Filter;
