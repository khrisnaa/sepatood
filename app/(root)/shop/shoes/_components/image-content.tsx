'use client';

import { TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';

interface ImageContentProps {
  value: string;
  imgUrl: string;
}

export const ImageContent = ({ value, imgUrl }: ImageContentProps) => {
  return (
    <div>
      <TabsContent
        value={value}
        className="m-0 h-full w-full p-0"
        defaultValue="0"
        defaultChecked={true}
      >
        <div className="m-0 aspect-square h-full w-full min-w-[200px] max-w-[400px]">
          <Image
            alt="shoes"
            src={imgUrl}
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
      </TabsContent>
    </div>
  );
};
