export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-lime-400/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(204,255,0,0.15)]">
        
        <h1 className="text-5xl font-black text-center text-lime-400 drop-shadow-[0_0_20px_#ccff00]">
          MARKIZ
        </h1>

        <p className="text-center text-zinc-400 mt-4">
          ENTER THE MISSION
        </p>

        <div className="mt-10 space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-lime-400"
          />

          <button className="w-full bg-lime-400 text-black py-4 rounded-2xl text-xl font-black shadow-[0_0_25px_#ccff00] hover:scale-105 transition">
            LOGIN
          </button>
        </div>
      </div>
    </main>
  );
}