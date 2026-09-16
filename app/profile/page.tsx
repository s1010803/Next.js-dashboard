export default function Page() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Git",
  ];

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page Title */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Profile Card
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            A responsive profile card built with Tailwind CSS.
          </p>
        </header>

        {/* Profile Card */}
        <section className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
          {/* Cover */}
          <div className="h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 sm:h-40" />

          {/* Main Content */}
          <div className="px-5 pb-6 sm:px-8 sm:pb-8">
            {/* Profile Header */}
            <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
              {/* Avatar + Name */}
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end">
                {/* Avatar */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-white bg-slate-800 text-2xl font-bold text-white shadow-md sm:h-28 sm:w-28">
                  AC
                </div>

                {/* Name */}
                <div className="sm:pb-1">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    Alex Chen
                  </h2>

                  <p className="text-sm font-medium text-blue-600">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:flex-none">
                  Follow
                </button>

                <button className="flex-1 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:flex-none">
                  Message
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {/* About */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  About Me
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  I love building modern web applications with Next.js,
                  React, and TypeScript. I enjoy learning new technologies
                  and turning ideas into real-world products.
                </p>

                {/* Information */}
                <div className="mt-6 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  <span className="flex items-center gap-2">
                    <span>📍</span>
                    Taipei, Taiwan
                  </span>

                  <span className="flex items-center gap-2">
                    <span>💼</span>
                    Software Engineer
                  </span>

                  <span className="flex items-center gap-2">
                    <span>📅</span>
                    Joined Jun 2024
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Skills
                </h3>

                {/* Grid */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-center text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-6">
              <div className="text-center">
                <p className="text-xl font-bold text-slate-900">128</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Posts
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-slate-900">2.4K</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Followers
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-slate-900">312</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Following
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}