import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className="bg-black text-white m-0 p-0 w-screen h-screen scrollbar-hide">
        {children}
      </body>
    </html>
  );
}
