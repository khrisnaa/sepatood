'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const [query, setQuery] = useState(
    searchParams.get('query')?.toString() || '',
  );

  useEffect(() => {
    // Update local state when searchParams change
    setQuery(searchParams.get('query')?.toString() || '');
  }, [searchParams]);

  const onSearch = (keyword: string) => {
    if (keyword) {
      params.set('query', keyword);
    } else {
      params.delete('query');
    }

    if (pathname.startsWith('/shop')) {
      router.replace(`/shop?${params.toString()}`);
    }
    setQuery(keyword);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      params.set('query', query);
      router.replace(`/shop?${params.toString()}`);
    }
  };
  return (
    <>
      <motion.button
        className="p-1 md:hidden"
        onClick={() => router.push('/shop')}
      >
        <Search className="h-5 w-5" />
      </motion.button>
      <div className="relative hidden md:flex">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="max-w-32 pl-8 lg:max-w-none"
          type="text"
          value={query}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
    </>
  );
};
