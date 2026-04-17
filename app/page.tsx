
export default function Home() {
  return (
    <>
      <main className="min-h-[100dvh] flex items-center justify-center bg-[#020617] text-white px-6 py-20">
        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-400">Coming Soon</p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              StellarRank Home is Under Construction
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              We are building something incredible for the `/home` route. Please check back soon, or use the main site navigation to explore our current pages.
            </p>
            <a
              href="/"
              className="mt-10 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-slate-200"
            >
              Return to Main Page
            </a>
          </div>
        </div>
      </main>

    </>
  );
}