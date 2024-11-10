import "./globals.css";

export const metadata = {
  title: "Travel World",
  description: "Travel World App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
