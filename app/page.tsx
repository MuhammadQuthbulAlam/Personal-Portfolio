import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* PROFILE IMAGE */}
        <Image
          src="/profile.jpeg"
          alt="Muhammad Quthbul Alam"
          width={180}
          height={180}
          className="rounded-full border border-gray-300 dark:border-gray-700"
          priority
        />

        {/* INTRO */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            Hi, Saya Muhammad Quthbul Alam 👋
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-5">
            A Fullstack Software Engineer with strong interests in frontend
            architecture, backend systems, and applied AI. I enjoy building
            clean, scalable, and maintainable applications inspired by
            open-source workflows.
          </p>

          <div className="flex gap-4 text-sm">
            <Link
              href="/projects"
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-[#161b22]"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-[#161b22]"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
