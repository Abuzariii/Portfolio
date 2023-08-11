import "./globals.css";

export const metadata = {
  title: "Abuzar",
  description: "My Personal Portfolio built using Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
