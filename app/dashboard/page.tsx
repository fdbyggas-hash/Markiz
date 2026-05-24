export default function DashboardPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/F799E4EF-18CE-49E0-ADA6-D18B7BB40A9C_1_105_c.jpeg')",
      }}
    >
      {/* MENU */}
      <nav className="flex justify-between items-center px-10 py-6 bg-black/60">
        <h1 className="text-4xl font-black text-lime-400">
          MARKIZ
        </h1>

        <div className="flex gap-8 text-white font-bold text-lg">
          <a href="/dashboard">Dashboard</a>
          <a href="/workout">Workout</a>
          <a href="/login">Login</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="flex flex-col items-center justify-center text-center pt-32 px-6">
        <h1 className="text-8xl font-black text-lime-400 drop-shadow-[0_0_25px_lime]">
          MARKIZ
        </h1>

        <h2 className="text-4xl text-white font-bold mt-6">
          ONE TEAM. ONE MISSION.
        </h2>

        <p className="text-gray-300 mt-6 text-xl max-w-2xl">
          Build discipline. Destroy weakness. Complete missions.
          Gain XP. Become impossible to break.
        </p>

        <div className="flex gap-6 mt-12">
          <a
            href="/workout"
            className="bg-lime-400 text-black px-10 py-4 rounded-2xl font-bold shadow-[0_0_25px_lime]"
          >
            START MISSION
          </a>

          <a
            href="/login"
            className="border-2 border-lime-400 text-lime-400 px-10 py-4 rounded-2xl font-bold"
          >
            LOGIN
          </a>
        </div>
      </div>
    </main>
  );
}