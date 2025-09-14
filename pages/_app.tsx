import "@/styles/globals.css";

import classNames from "classnames";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-next-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-next-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(geistMono.variable, geistSans.variable)}>
      <Component {...pageProps} />
    </main>
  );
}
