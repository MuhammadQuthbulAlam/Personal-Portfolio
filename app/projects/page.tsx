// app/projects/page.tsx
import Link from "next/link";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
};

async function getRepos(): Promise<Repo[]> {
  if (!process.env.GITHUB_USERNAME) {
    throw new Error("GITHUB_USERNAME is missing");
  }

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "nextjs-portfolio",
  };

  // Token OPTIONAL (biar tidak error)
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers,
      cache: "no-store",
    }
  );

  console.log("GitHub Status:", res.status);

  if (!res.ok) {
    const text = await res.text();
    console.error("GitHub Raw Response:", text);
    throw new Error(`GitHub API failed: ${res.status}`);
  }

  return res.json();
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
        A collection of my open-source and academic projects covering frontend,
        backend, and AI-related development.
      </p>

      {/* FILTER INFO */}
      <div className="flex gap-4 text-sm mb-8">
        <span className="px-3 py-1 border rounded">Frontend</span>
        <span className="px-3 py-1 border rounded">Backend</span>
        <span className="px-3 py-1 border rounded">AI</span>
      </div>

      {/* REPO LIST */}
      <div className="grid md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="border border-gray-200 dark:border-gray-800 rounded p-5 hover:bg-gray-50 dark:hover:bg-[#161b22]"
          >
            <h2 className="font-semibold text-lg mb-1">
              <Link
                href={repo.html_url}
                target="_blank"
                className="hover:underline"
              >
                {repo.name}
              </Link>
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {repo.description || "No description provided."}
            </p>

            <div className="flex gap-3 text-xs text-gray-500">
              {repo.language && <span>{repo.language}</span>}
              {repo.topics?.includes("frontend") && <span>Frontend</span>}
              {repo.topics?.includes("backend") && <span>Backend</span>}
              {repo.topics?.includes("ai") && <span>AI</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
