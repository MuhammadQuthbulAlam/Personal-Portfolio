"use client";

import Image from "next/image";
import Link from "next/link";
import ContributionGraph from "./components/ContributionGraph";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
  FaGit,
} from "react-icons/fa";
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
          className="rounded-3xl border border-gray-300 dark:border-gray-700"
          priority
        />

        {/* INTRO */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            Hallo, Saya Muhammad Quthbul Alam 👋
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-5">
            Seorang Fullstack Software Engineering dengan minat yang kuat pada
            frontend, sistem backend, dan AI terapan. Saya senang membangun
            aplikasi yang bersih, terukur, dan mudah dipelihara yang
            terinspirasi oleh workflow open-source.
          </p>

          <div className="flex gap-4 text-sm">
            <Link
              href="/projects"
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-[#161b22]"
            >
              Lihat Proyek
            </Link>
            <Link
              href="/resume.pdf"
              download
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-[#161b22]"
            >
              Download Resume
            </Link>
          </div>
          <div className="pt-6 social-footer flex items-center sm:gap-7 gap-7">
            <a href="https://www.facebook.com/share/1AK27igrXq/">
              <FaFacebook className="ri-facebook-circle-fill text-2xl hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-quthbul-alam-a46933283/">
              <FaLinkedin className="ri-linkedin-fill text-2xl hover:text-sky-700" />
            </a>
            <a href="https://www.instagram.com/mochansr_?igsh=MWZhc2E1dGJpaTl3Yg==">
              <FaInstagram className="ri-instagram-fill text-2xl hover:text-pink-500" />
            </a>
            <a href="https://github.com/MuhammadQuthbulAlam?tab=overview&from=2024-03-01&to=2024-03-22">
              <FaGithub className="ri-github-fill text-2xl hover:text-green-500" />
            </a>
          </div>
        </div>
      </div>
      <ContributionGraph />
      <div className="pt-6 social-footer flex items-center sm:gap-7 gap-5">
        <FaHtml5 className="ri-html-fill text-5xl" />
        <FaCss3 className="ri-css-fill text-5xl" />
        <FaJs className="ri-js-fill text-5xl" />
        <FaPython className="ri-python-fill text-5xl" />
        <FaNodeJs className="ri-nodejs-fill text-5xl" />
        <FaReact className="ri-react-fill text-5xl" />
        <FaGit className="ri-git-fill text-5xl" />
      </div>
    </section>
  );
}
