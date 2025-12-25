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
      <body className="bg-gray-50 dark:bg-[#0d1117]">
        {/* NAVBAR */}
        <header className="border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="font-bold text-lg p-1 dark:hover:bg-[#161b22] rounded-sm transition-colors duration-200">
                Muhammad Quthbul Alam
              </span>
            </Link>

            <div className="flex gap-7 text-sm">
              <Link
                href="/projects"
                className="p-1 dark:hover:bg-[#161b22] rounded-sm transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="p-1 dark:hover:bg-[#161b22] rounded-sm transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="/resume"
                className="p-1 dark:hover:bg-[#161b22] rounded-sm transition-colors duration-200"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="p-1 dark:hover:bg-[#161b22] rounded-sm transition-colors duration-200"
              >
                Contact
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
