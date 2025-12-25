// app/resume/page.tsx
import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* HEADER */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Muhammad Quthbul Alam</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Fullstack Software Engineer · Frontend · Backend · AI
        </p>

        <div className="flex gap-4 text-sm mt-4">
          <Link
            href="https://github.com/MuhammadQuthbulAlam"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </Link>
          <span>·</span>
          <span>Indonesia</span>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Ringkasan</h2>
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          Mahasiswa tingkat akhir Informatika dengan minat yang kuat di bidang
          rekayasa perangkat lunak dan penelitian terapan. Berpengalaman dalam
          membangun aplikasi web modern menggunakan Next.js, React, Node.js, dan
          Python, serta melakukan penelitian akademis di bidang AI dan forensik
          digital.
        </p>
      </section>

      {/* SKILLS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="border rounded p-4">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="border rounded p-4">
            <h3 className="font-semibold mb-2">Backend</h3>
            <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
              <li>Node.js</li>
              <li>REST API</li>
              <li>SQL / NoSQL Database</li>
            </ul>
          </div>

          <div className="border rounded p-4">
            <h3 className="font-semibold mb-2">AI & Research</h3>
            <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
              <li>Python</li>
              <li>Convolutional Neural Network (CNN)</li>
              <li>Data Analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Pendidikan</h2>
        <div className="border rounded p-4">
          <h3 className="font-semibold">
            UNIVERSITAS MAJALENGKA | Sarjana Komputer
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">IPK | 3.78</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Proyek Pilihan</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-400">
          <li>• Background Noise Classification using CNN (ESC-50 Dataset)</li>
          <li>• Video Manipulation Detection using SSIM</li>
          <li>• Fullstack Web Applications with Next.js & REST API</li>
        </ul>
      </section>

      {/* ACTION */}
      <section className="mt-12">
        <Link
          href="#"
          className="inline-block px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-[#161b22]"
        >
          Download PDF (Coming Soon)
        </Link>
      </section>
    </section>
  );
}
