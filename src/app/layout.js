import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-heading" });

export const metadata = {
  title: "Uzair Ejaz | React & Next.js Developer",
  description:
    "I’m Uzair Ejaz, a passionate web developer skilled in React.js, Next.js, Tailwind CSS, and modern web technologies. I build clean, responsive, and AI-powered web experiences.",
  keywords: [
    "Uzair Ejaz",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Web Developer Portfolio",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Uzair Ejaz", url: "https://uzairejaz.vercel.app" }],
  creator: "Uzair Ejaz",
  publisher: "Uzair Ejaz",
  openGraph: {
    title: "Uzair Ejaz | React & Next.js Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, and Tailwind CSS. Creating modern, fast, and aesthetic websites.",
    url: "https://uzairejaz.vercel.app",
    siteName: "Uzair Ejaz Portfolio",
    images: [
      {
        url: "/og-image.jpg", // place your preview image in /public/
        width: 1200,
        height: 630,
        alt: "Uzair Ejaz Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
