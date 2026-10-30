import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leadgen. | Qualified conversations. Predictable growth.',
  description: 'We help B2B tech companies accelerate sales with outsourced SDR and lead generation services across the Nordics.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
