import { AboutSection } from '@/app/(root)/(public)/about/_components/about-section';

const sections = [
  {
    header: 'Our Mission',
    sub_header: 'Elevating Fashion with Sustainability',
    paragraph:
      'At Sepatood, our mission is to blend style with sustainability. We’re dedicated to offering a curated selection of high-quality second-hand shoes that not only enhance your wardrobe but also support a more eco-friendly lifestyle. Our goal is to make sustainable fashion accessible and exciting for everyone.',
  },
  {
    header: 'Our Story',
    sub_header: 'A Passion for Style and Purpose',
    paragraph:
      'Sepatood was born from the vision of [Your Name], who saw an opportunity to merge a love for fashion with a commitment to environmental responsibility. What started as a simple idea has grown into a thriving platform where people can find stylish, pre-loved footwear. Our journey reflects a deep dedication to both quality and sustainability.',
  },
  {
    header: 'Our Collection',
    sub_header: 'Curated for Quality and Variety',
    paragraph:
      'We offer a diverse range of second-hand shoes, from chic sneakers and rugged boots to elegant dress shoes and comfortable loafers. Each pair is carefully inspected and cleaned to meet our high standards. At Sepatood, we strive to provide a seamless shopping experience, ensuring that every pair you find is both fashionable and reliable.',
  },
];

export const AboutList = () => {
  return (
    <div>
      {sections.map((item, i) => (
        <AboutSection
          key={i}
          header={item.header}
          subHeader={item.sub_header}
          paragraph={item.paragraph}
        />
      ))}
    </div>
  );
};
