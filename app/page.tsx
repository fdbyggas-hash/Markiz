export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('/markiz.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center px-6">
        <h1 className="text-7xl md:text-9xl font-black text-lime-400 drop-shadow-[0_0_25px_lime]">
          MARKIZ
        </h1>

        <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-widest">
          ONE TEAM. ONE MISSION.
        </h2>

        <p className="mt-6 text-lg md:text-2xl max-w-3xl text-gray-200 font-semibold">
          Build discipline. Destroy weakness.
          Complete missions. Gain XP.
          Become impossible to break.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="/workout"
            className="bg-lime-400 text-black px-10 py-5 rounded-2xl text-2xl font-black shadow-[0_0_30px_lime] hover:scale-105 transition"
          >
            START MISSION
          </a>

          <a
            href="/profile"
            className="border-2 border-lime-400 text-lime-400 px-10 py-5 rounded-2xl text-2xl font-black hover:bg-lime-400 hover:text-black transition"
          >
            VIEW PROFILE
          </a>
        </div>
      </div>
    </main>
  );
}