export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-6xl font-black text-lime-400 mb-6">
        MARKIZ
      </h1>

      <h2 className="text-4xl font-bold mb-6">
        ONE TEAM. ONE MISSION.
      </h2>

      <p className="text-gray-300 max-w-xl text-lg mb-10">
        Build discipline. Destroy weakness.
        Complete missions. Gain XP.
        Become impossible to break.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">

        <a
          href="/dashboard"
          className="bg-lime-400 text-black font-bold py-4 rounded-2xl text-2xl"
        >
          START MISSION
        </a>

        <a
          href="/profile"
          className="border-2 border-lime-400 text-lime-400 font-bold py-4 rounded-2xl text-2xl"
        >
          VIEW PROFILE
        </a>

      </div>

    </main>
  );
}