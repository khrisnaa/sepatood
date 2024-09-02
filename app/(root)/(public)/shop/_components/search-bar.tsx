'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onSearch = (keyword: string) => {
    const params = new URLSearchParams(searchParams);
    if (keyword) {
      params.set('query', keyword);
    } else {
      params.delete('query');
    }

    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div>
      <input
        type="text"
        className="border border-primary p-4"
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
