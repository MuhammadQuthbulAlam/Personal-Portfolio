import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Muhammad Quthbul Alam | Fullstack Software Engineer",
  description:
    "Portfolio GitHub-style menggunakan Next.js (Frontend, Backend, Fullstack)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-50 dark:bg-[#0d1117] text-gray-900 dark:text-gray-100">
        {/* NAVBAR */}
        <header className="border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full border border-gray-300 dark:border-gray-700"
              />
              <span className="font-bold text-lg">Muhammad Quthbul Alam</span>
            </Link>

            <div className="flex gap-4 text-sm">
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/resume" className="hover:underline">
                Resume
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
          <div className="max-w-6xl mx-auto p-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Muhammad Quthbul Alam
          </div>
        </footer>
      </body>
    </html>
  );
}
