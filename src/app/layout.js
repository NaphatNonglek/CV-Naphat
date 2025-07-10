import './globals.css';

export const metadata = {
  title: 'NaphatPortforio',
  description:
    'A portfolio showcasing my UX/UI design work created for internship opportunities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
