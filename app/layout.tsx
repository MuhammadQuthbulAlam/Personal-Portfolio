import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

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
    <html lang="en">
      <body className="bg-gray-50 dark:bg-[#0d1117] text-gray-900 dark:text-gray-100">
        {/* NAVBAR */}
        <header className="border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="font-bold text-lg">
              MuhammadQuthbulAlam
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

        {/* MAIN CONTENT */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
          <div className="max-w-6xl mx-auto p-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Muhammad Quthbul Alam · Built with
            Next.js
          </div>
        </footer>
      </body>
    </html>
  );
}
