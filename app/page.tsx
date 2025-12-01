"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-16 text-center text-slate-900">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(248,113,113,0.35)]">
        Welcome to Josie&apos;s World!
      </h1>
      <div className="flex flex-col items-center gap-4 mt-2">
        <p className="text-sm md:text-base text-slate-700">
          Add me on <span className="font-semibold text-emerald-700">WeChat</span>:
          <span className="ml-2 inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs md:text-sm font-semibold text-emerald-800">
            Coyyebo
          </span>
        </p>
        <div className="rounded-3xl bg-white/80 p-5 shadow-lg">
          <img
            src="/wechat-qr-coyyebo.png"
            alt="WeChat QR code for Coyyebo"
            className="h-80 w-80 object-contain"
          />
        </div>
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-sm md:text-base text-slate-700">
            These are a few of the worlds I&apos;ve been wandering through lately — if you&apos;re a fellow book lover, let&apos;s connect and swap ideas!
          </p>
          <div className="rounded-3xl bg-white/80 p-6 shadow-lg inline-block">
            <img
              src="/bookshelf-favs.png"
              alt="Some of Josie's favourite books"
              className="h-[30rem] w-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
