import "./globals.css";

export const metadata = {
  title: "MARKIZ",
  description: "Military app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}