export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">

      <a
        href="/"
        className="text-lime-400 text-xl mb-6 inline-block"
      >
        ← HOME
      </a>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-5xl font-black text-lime-400">
            MARKIZ
          </h1>
          <p className="text-gray-400 mt-2 text-2xl">
            LEVEL 1
          </p>
        </div>

        <div className="text-right">
          <p className="text-lime-400 text-4xl font-bold">
            75 XP
          </p>
          <p className="text-lime-400 text-2xl mt-2">
            🔥 STREAK: 0
          </p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto mb-10">
        <div className="bg-lime-400 text-black min-w-[120px] h-[120px] rounded-3xl flex flex-col items-center justify-center font-bold text-2xl">
          <span>DAY</span>
          <span>1</span>
        </div>

        <div className="bg-zinc-900 min-w-[120px] h-[120px] rounded-3xl flex flex-col items-center justify-center font-bold text-2xl">
          <span>DAY</span>
          <span>2</span>
        </div>

        <div className="bg-zinc-900 min-w-[120px] h-[120px] rounded-3xl flex flex-col items-center justify-center font-bold text-2xl">
          <span>DAY</span>
          <span>3</span>
        </div>

        <div className="bg-zinc-900 min-w-[120px] h-[120px] rounded-3xl flex flex-col items-center justify-center font-bold text-2xl">
          <span>DAY</span>
          <span>4</span>
        </div>
      </div>

      <div className="border border-lime-400 rounded-[40px] p-6">
        <h2 className="text-7xl font-black text-lime-400 text-center mb-4">
          DAY 1
        </h2>

        <p className="text-center text-4xl text-gray-300 mb-10">
          STRENGTH MISSION
        </p>

        <div className="space-y-6">

          <div className="bg-zinc-900 rounded-3xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-4xl font-bold">
                Push Ups × 100
              </h3>
              <p className="text-lime-400 text-2xl mt-2">
                +25 XP
              </p>
            </div>

            <input
              type="checkbox"
              className="w-10 h-10"
            />
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-4xl font-bold">
                Pull Ups × 25
              </h3>
              <p className="text-lime-400 text-2xl mt-2">
                +25 XP
              </p>
            </div>

            <input
              type="checkbox"
              className="w-10 h-10"
            />
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-4xl font-bold">
                Diamond Push Ups × 50
              </h3>
              <p className="text-lime-400 text-2xl mt-2">
                +25 XP
              </p>
            </div>

            <input
              type="checkbox"
              className="w-10 h-10"
            />
          </div>

        </div>
      </div>

    </main>
  );
}