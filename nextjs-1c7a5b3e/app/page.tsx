import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-indigo-950 text-white p-8 text-center relative overflow-hidden">
      
      {/*  */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/stars.svg')] bg-cover bg-no-repeat opacity-30 -z-10"></div>

      <h1 className="text-5xl sm:text-7xl font-extrabold mb-6">
        🌌 Fedezd fel a kozmoszt
      </h1>

      <p className="text-neutral-300 max-w-xl mb-10 leading-relaxed text-lg sm:text-xl">
        Ismerd meg a bolygókat, csillagokat és galaxisokat egy gyönyörűen megtervezett űr-tematikájú weboldalon. 
        Kezdd el az utazást, és fedezd fel az univerzumot!
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/bolygok"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg"
        >
          Fedezd a bolygókat
        </Link>
        <a
          href="https://www.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-neutral-600 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-full transition-all font-semibold"
        >
          NASA weboldal
        </a>
      </div>

      <footer className="mt-20 text-neutral-500 text-sm">
        © {new Date().getFullYear()} — Üdvözlöm Tanár Urat!
      </footer>
    </main>
  );
}
