'use client';

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>The New Page Project - Turning the Page on Education Inequality</title>
        <meta name="description" content="Empowering communities through literacy and education. 20,000+ books donated, $4,500+ raised, making a difference one page at a time." />
        <meta name="keywords" content="education, literacy, books, donation, community, nonprofit, youth, humanitarian" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}