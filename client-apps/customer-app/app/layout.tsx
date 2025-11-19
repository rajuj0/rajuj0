import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Barbertop — Book your trusted barber',
  description:
    'Two-sided marketplace MVP for loyalty-driven salon bookings with real-time availability, payments, and notifications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
