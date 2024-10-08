import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import { ReactLenis, useLenis } from '@/lib/lenis';
import { ThemeProvider } from '@/providers/theme-provider';
const roboto = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sepatood - Premium Second-Hand Shoe Store',
  description:
    'Discover a curated collection of premium second-hand shoes at Sepatood. Shop top brands with confidence, knowing each pair is inspected for quality and style.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ReactLenis root>
        <html lang="en">
          <body className={cn('bg-secondary', roboto.className)}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ReactLenis>
    </ClerkProvider>
  );
}
