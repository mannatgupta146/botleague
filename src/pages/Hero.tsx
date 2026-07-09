import Navbar from "../components/Navbar";
import heroVideo from "../assets/videos/hero.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div className="relative z-50">
        <Navbar />
      </div>

      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-linear-to-r from-black via-black/85 via-45% to-transparent" />

      <div className="absolute top-28 right-48 z-30 inline-flex items-center gap-2 rounded-md bg-[#161618]/95 px-4 py-1 text-xs font-semibold tracking-wide text-white border border-white/10 backdrop-blur-sm">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        <span className="text-[0.9rem] uppercase font-bold tracking-widest text-red-500">Live :</span>
        <span className="text-[1rem] text-gray-300">Episode 14 - Bengaluru Regionals</span>
        <span className="text-[1rem] font-semibold text-red-500 ml-2 cursor-pointer hover:text-red-400 transition-colors">WATCH LIVE</span>
      </div>

      <div className="relative z-20 flex h-full items-center px-14">
        <div className="max-w-2xl">

          <h1 className="text-7xl font-semibold tracking-wide text-white">
            INDIA'S ULTIMATE
            <br />
            ROBOTICS ARENA
          </h1>

          <p className="mt-2 text-xl text-gray-300">
            Build.Compete.Rank.The National
            <br />
            Ecosystem for Robotics Arena
          </p>

          <div className="mt-6 flex gap-3">

            <button className="cursor-pointer rounded-lg bg-brand-gradient px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90">
              CREATE ACCOUNT
            </button>

            <button className="cursor-pointer rounded-lg border border-white bg-transparent px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black">
              EXPLORE EVENTS
            </button>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;