import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const title = "A beginner's journey from Texas to Omaha";
const subtitle = "One year project of learning Pot Limit Omaha";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "A beginner's journey from Texas to Omaha",
  description: "One year project of learning Pot Limit Omaha",
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
        <main>
          <div className="flex flex-col container mx-auto bg-slate-100 p-12">
            <h1
              className="mx-auto text-4xl text-center font-black mb-2"
              data-testid="layout-h1"
            >
              {title}
            </h1>
            <h2
              className="mx-auto text-xl text-center font-semibold"
              data-testid="layout-h2"
            >
              {subtitle}
            </h2>
            <hr className="my-6" />
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
