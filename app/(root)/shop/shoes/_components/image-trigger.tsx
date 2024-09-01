import { TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

interface ImageTriggerProps {
  value: string;
  imgUrl: string;
}

export const ImageTrigger = ({ value, imgUrl }: ImageTriggerProps) => {
  return (
    <TabsTrigger
      value={value}
      className="aspect-square min-w-[40px] max-w-[80px] rounded-none border-2 border-primary p-0"
    >
      <Image
        alt="shoes"
        src={imgUrl}
        width={300}
        height={300}
        className="h-full w-full object-cover"
      />
    </TabsTrigger>
  );
};
