import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Lora, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Georgia Dimaki",
  description: "Georgia Dimaki's Website",
};

export default function RootLayout({ children }) {
  const gaMeasurementId = 'G-B62LXGZ6QE';
  return (
    <html lang="en">
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
