import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Just Systems Initiative',
  description:
    'Just Systems Initiative is a nonprofit organization in formation building pathways from incarceration to opportunity through education, reentry resources, family connection, and justice-centered civic literacy.',
  openGraph: {
    title: 'Just Systems Initiative',
    description:
      'Building pathways from incarceration to opportunity through education, connection, and reentry preparation.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just Systems Initiative',
    description:
      'Building pathways from incarceration to opportunity through education, connection, and reentry preparation.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
