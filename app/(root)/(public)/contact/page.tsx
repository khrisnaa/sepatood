import { ContactForm } from '@/app/(root)/(public)/contact/_components/contact-form';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex">
      <div className="hidden h-[100vh] w-1/2 md:inline-block">
        <Image
          src="https://res.cloudinary.com/daq0ltjrn/image/upload/v1725286814/nike-just-do-it_2_qiszly.png"
          alt="contact image"
          width={300}
          height={300}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full p-4 md:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};
export default Page;
