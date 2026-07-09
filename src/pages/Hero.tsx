import Navbar from "../components/Navbar";
import heroVideo from "../assets/videos/hero.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen w-full overflow-hidden">

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

      <div className="absolute top-28 right-4 md:right-16 lg:right-48 z-30 inline-flex items-center gap-2 rounded-md bg-[#161618]/95 px-4 py-1 text-xs font-semibold tracking-wide text-white border border-white/10 backdrop-blur-sm">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        <span className="text-[0.9rem] uppercase font-bold tracking-widest text-red-500">Live :</span>
        <span className="text-[1rem] text-gray-300">Episode 14 - Bengaluru Regionals</span>
        <span className="text-[1rem] font-semibold text-red-500 ml-2 cursor-pointer hover:text-red-400 transition-colors">WATCH LIVE</span>
      </div>

      <div className="relative z-20 flex min-h-screen lg:h-full items-center pt-48 lg:pt-0 pb-12 lg:pb-0 px-6 md:px-14">
        <div className="max-w-2xl text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-white leading-tight">
            INDIA'S ULTIMATE
            <br />
            ROBOTICS ARENA
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-lg">
            Build. Compete. Rank. The National
            <br />
            Ecosystem for Robotics Arena
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="cursor-pointer rounded-lg bg-brand-gradient px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-95">
              CREATE ACCOUNT
            </button>

            <button className="cursor-pointer rounded-lg border border-white bg-transparent px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black active:scale-95">
              EXPLORE EVENTS
            </button>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;