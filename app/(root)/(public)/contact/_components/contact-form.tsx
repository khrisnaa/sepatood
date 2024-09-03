'use client';

import { MotionButton } from '@/components/motion-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const title = 'GET IN TOUCH';

  return (
    <section className="flex w-full flex-col items-center justify-center space-y-4 bg-secondary py-6 lg:space-y-8">
      <div className="w-full">
        <motion.h1
          className="relative overflow-hidden text-center font-anton text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
          initial="initial"
          whileInView="viewed"
        >
          {title.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              {word.split('').map((l, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={{
                    initial: { y: '-100%' },
                    viewed: { y: '0%' },
                  }}
                  transition={{ delay: 0.1 * (wordIndex * word.length + i) }}
                >
                  {l}
                </motion.span>
              ))}
              {/* Add space between words */}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </motion.h1>
        <p className="text-center text-sm md:text-base">
          We'd love to hear from you. Reach out anytime!
        </p>
      </div>
      <div className="flex w-full max-w-xl justify-center">
        <form className="flex w-full max-w-xs flex-col gap-6 md:max-w-md lg:max-w-2xl">
          <div>
            <Label>Email</Label>
            <Input className="rounded-none border-2 border-primary bg-secondary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0" />
          </div>
          <div>
            <Label>Message</Label>
            <Textarea className="h-32 rounded-none border-2 border-primary bg-secondary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 lg:h-64" />
          </div>
          <MotionButton>Send</MotionButton>
        </form>
      </div>
    </section>
  );
};
