import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NÁZA",
  description: "A sleek and modern dark-themed Next.js layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-neutral-950 text-neutral-100">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="p-6 border-b border-neutral-800 flex justify-between items-center">
          <h1 className="text-xl font-semibold">🚀 Random oldal Rajmund Tanár Úrnak!</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:text-blue-400 transition-colors">
              Főoldal
            </a>
            <a href="/about" className="hover:text-blue-400 transition-colors">
              Rólunk
            </a>
          </nav>
        </header>

        <main className="flex-1 p-8 animate-fadeIn">{children}</main>

        <footer className="p-4 border-t border-neutral-800 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Random oldal Rajmund Tanár Úrnak!
        </footer>
      </body>
    </html>
  );
}
