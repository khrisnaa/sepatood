'use client';

import { CldUploadWidget } from 'next-cloudinary';

import { Button } from '@/components/ui/button';
import { ImagePlusIcon, Trash } from 'lucide-react';
import Image from 'next/image';

interface ImageUploadProps {
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

export const ImageUpload = ({
  onChange,
  onRemove,
  value,
}: ImageUploadProps) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url, index) => (
          <div
            key={url + index}
            className="relative h-[200px] w-[200px] overflow-hidden rounded-md"
          >
            <div className="absolute right-2 top-2 z-10">
              <Button onClick={() => onRemove(url)} type="button">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image src={url} alt="Image" fill className="object-cover" />
          </div>
        ))}
      </div>
      <CldUploadWidget
        onUpload={onUpload}
        // uploadPreset="i8vifzrk"
        uploadPreset="omsxac01"
      >
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button onClick={onClick} type="button">
              <ImagePlusIcon className="mr-4 h-4 w-4" />
              Upload an image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
