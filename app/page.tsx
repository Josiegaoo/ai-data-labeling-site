"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-16 text-center text-slate-900">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(248,113,113,0.35)]">
        Welcome to Josie&apos;s World!
      </h1>
      <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-xl">
        A small corner of the internet where I collect what I&apos;m reading, learning, and curious about.
      </p>
      <a
        href="https://weread.qq.com/web/shelf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-pink-400/40 transition hover:scale-[1.03]"
      >
        Visit my WeRead bookshelf
      </a>
      <p className="mt-6 text-sm md:text-base text-slate-700">
        Or add me on <span className="font-semibold text-emerald-700">WeChat</span>:
        <span className="ml-2 inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs md:text-sm font-semibold text-emerald-800">
          Coyyebo
        </span>
      </p>
    </main>
  );
}
