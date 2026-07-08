import page4Img from "../assets/images/page4.png";

const Page4 = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#09090A] text-white py-24 px-6 md:px-14 lg:px-20 overflow-hidden flex flex-col justify-center border-t border-neutral-900">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
                    <div className="lg:col-span-7 flex flex-col">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-12 text-left">
                            WHAT IS BOTLEAGUE?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 text-left">
                            <div>
                                <span className="text-[#FF4D4C] font-bold text-3xl block mb-2">1.</span>
                                <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide">
                                    STRUCTURED EVENTS
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-base mt-2 leading-relaxed font-light">
                                    "From one-off events to a year-round competitive season."
                                </p>
                            </div>

                            <div>
                                <span className="text-[#FF4D4C] font-bold text-3xl block mb-2">2.</span>
                                <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide">
                                    DIGITAL IDENTITY
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-base mt-2 leading-relaxed font-light">
                                    "Your professional robotics legacy, tracked and verified."
                                </p>
                            </div>

                            <div>
                                <span className="text-[#FF4D4C] font-bold text-3xl block mb-2">3.</span>
                                <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide">
                                    NATIONAL RANKING
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-base mt-2 leading-relaxed font-light">
                                    "Benchmark your skills against the best engineers in India."
                                </p>
                            </div>

                            <div>
                                <span className="text-[#FF4D4C] font-bold text-3xl block mb-2">4.</span>
                                <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide">
                                    CAREER PATHWAY
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-base mt-2 leading-relaxed font-light">
                                    "Turning arena victories into real-world industry opportunities."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center items-center">
                        <img src={page4Img} className="w-full max-w-[360px] md:max-w-[420px] object-contain" alt="BotLeague Diagram" />
                    </div>
                </div>

                <div className="pt-20 border-t border-neutral-900/60">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-16 text-left">
                        CATEGORIES
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md min-h-[340px] text-left border border-yellow-500/90 transition-all duration-300">
                            <div>
                                <svg className="w-24 h-24 text-yellow-500 mb-6" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="48" cy="48" r="36" strokeWidth="5" />
                                    <path d="M 34 60 L 34 36 L 48 50 L 62 36 L 62 60" strokeWidth="6" />
                                </svg>
                                <h3 className="text-lg md:text-[2.3rem] leading-[1.1] font-bold text-white uppercase mb-2 tracking-wide">
                                    MINI MAKERS
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-[1.1rem] mb-6 font-light">
                                    Where Creativity Meets Logic.
                                </p>
                            </div>
                            <span className="text-xs md:text-[1rem] px-4 font-bold uppercase tracking-widest text-[#FF4D4C] hover:text-[#ff3333] transition-colors mt-auto flex items-center gap-1 cursor-pointer">
                                LEARN MORE →
                            </span>
                        </div>

                        <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md min-h-[340px] text-left border border-neutral-800 transition-all duration-300">
                            <div>
                                <svg className="w-24 h-24 text-yellow-500 mb-6" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M 48 20 A 20 20 0 0 1 68 40 C 68 50 60 58 58 64 L 38 64 C 36 58 28 50 28 40 A 20 20 0 0 1 48 20 Z" />
                                    <path d="M 42 64 L 54 64 M 42 70 L 54 70 M 45 76 L 51 76" />
                                    <line x1="48" y1="10" x2="48" y2="14" />
                                    <line x1="26" y1="26" x2="29" y2="29" />
                                    <line x1="18" y1="40" x2="22" y2="40" />
                                    <line x1="74" y1="40" x2="78" y2="40" />
                                    <line x1="67" y1="26" x2="70" y2="29" />
                                </svg>
                                <h3 className="text-lg md:text-[2.3rem] leading-[1.1] font-bold text-white uppercase mb-2 tracking-wide">
                                    JUNIOR INNOVATORS
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-[1.1rem] mb-6 font-light">
                                    Engineering & Strategy Fundamentals.
                                </p>
                            </div>
                            <span className="text-xs md:text-[1rem] px-4 font-bold uppercase tracking-widest text-[#FF4D4C] hover:text-[#ff3333] transition-colors mt-auto flex items-center gap-1 cursor-pointer">
                                LEARN MORE →
                            </span>
                        </div>

                        <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md min-h-[340px] text-left border border-neutral-800 transition-all duration-300">
                            <div>
                                <svg className="w-24 h-24 text-yellow-500 mb-6" viewBox="0 0 96 96" fill="currentColor">
                                    <path d="M22 68v2h30v-2c0-7-6-12-15-12s-15 5-15 12z" />
                                    <circle cx="37" cy="40" r="9" />
                                    <path d="M25 38c0-7 5-10 12-10s12 3 12 10H25z" />
                                    <rect x="23" y="37" width="28" height="2.5" rx="1" />
                                    <rect x="35" y="24" width="4" height="6" rx="1" />
                                    <circle cx="64" cy="36" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                                    <path d="M64 28v3 M64 41v3 M56 36h3 M69 36h3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="72" cy="48" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <path d="M72 42v2 M72 52v2 M66 48h2 M76 48h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <h3 className="text-lg md:text-[2.3rem] leading-[1.1] font-bold text-white uppercase mb-2 tracking-wide">
                                    YOUNG ENGINEERS
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-[1.1rem] mb-6 font-light">
                                    Advanced Wireless & Autonomous Control.
                                </p>
                            </div>
                            <span className="text-xs md:text-[1rem] px-4 font-bold uppercase tracking-widest text-[#FF4D4C] hover:text-[#ff3333] transition-colors mt-auto flex items-center gap-1 cursor-pointer">
                                LEARN MORE →
                            </span>
                        </div>

                        <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md min-h-[340px] text-left border border-neutral-800 transition-all duration-300">
                            <div>
                                <svg className="w-24 h-24 text-yellow-500 mb-6" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M 30 74 C 30 74 34 68 34 60 C 34 52 28 48 28 38 C 28 26 38 18 50 18 C 62 18 70 26 70 38 C 70 42 68 46 68 50 L 72 56 L 64 58 L 60 74" />
                                    <path d="M 44 32 H 52 A 4 4 0 0 1 56 36 A 4 4 0 0 1 52 40 H 44 Z M 44 40 H 53 A 4 4 0 0 1 57 44 A 4 4 0 0 1 53 48 H 44 Z" strokeWidth="3" />
                                    <line x1="48" y1="28" x2="48" y2="32" strokeWidth="3" />
                                    <line x1="48" y1="48" x2="48" y2="52" strokeWidth="3" />
                                    <line x1="44" y1="32" x2="44" y2="48" strokeWidth="3" />
                                </svg>
                                <h3 className="text-lg md:text-[2.3rem] leading-[1.1] font-bold text-white uppercase mb-2 tracking-wide">
                                    ROBO MINDS
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-[1.1rem] mb-6 font-light">
                                    Elite Professional Sports & Robotics.
                                </p>
                            </div>
                            <span className="text-xs md:text-[1rem] px-4 font-bold uppercase tracking-widest text-[#FF4D4C] hover:text-[#ff3333] transition-colors mt-auto flex items-center gap-1 cursor-pointer">
                                LEARN MORE →
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page4;
