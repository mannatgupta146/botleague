import leaderboardImg from "../assets/images/page6/leaderboard.png";

const Page6 = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#09090A] text-white py-24 px-6 md:px-14 lg:px-20 overflow-hidden flex flex-col justify-center border-t border-neutral-900">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col">
                        <span className="text-xl md:text-22font-bold uppercase tracking-widest text-[#FF4D4C] block mb-3 text-left">
                            WHY REGISTER ?
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white mb-16 text-left whitespace-nowrap">
                            THE LEAGUE ADVANTAGE
                        </h2>

                        <div className="flex flex-col gap-10">
                            <div className="flex items-start gap-5 text-left">
                                <div className="shrink-0 text-[#FF4D4C]">
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="9" r="6" />
                                        <path d="M9 14.5l-3 6.5 3-1.5 3 1.5-3-6.5" />
                                        <path d="M15 14.5l3 6.5-3-1.5-3 1.5 3-6.5" />
                                        <path d="M12 7l1 2h2.5l-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5H11z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide">
                                        NATIONAL RECOGNITION
                                    </h3>
                                    <p className="text-neutral-400 text-sm md:text-[1.2rem] mt-1.5 leading-relaxed font-light max-w-[340px]">
                                        "Benchmark your skills on India's official robotics leaderboard."
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 text-left">
                                <div className="shrink-0 text-[#FF4D4C]">
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m14 13-8.3 8.3a2.1 2.1 0 1 1-3-3L11 10" />
                                        <path d="m16 16 3-3" />
                                        <path d="m8 8 3-3" />
                                        <path d="m9 9 5.4-5.4a2.1 2.1 0 1 1 3 3L12 12" />
                                        <path d="M7 21h10" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-[2rem] font-bold text-white uppercase tracking-wide">
                                        FAIR JUDGING
                                    </h3>
                                    <p className="text-neutral-400 text-sm md:text-[1.2rem] mt-1.5 leading-relaxed font-light max-w-[340px]">
                                        "Compete with confidence under standardized, expert-led evaluation."
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 text-left">
                                <div className="shrink-0 text-[#FF4D4C]">
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-[2rem] font-bold text-white uppercase tracking-wide">
                                        CAREER OPS
                                    </h3>
                                    <p className="text-neutral-400 text-sm md:text-[1.2rem] mt-1.5 leading-relaxed font-light max-w-[340px]">
                                        "Bridge the gap between arena victories and top-tier tech placements."
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 text-left">
                                <div className="shrink-0 text-[#FF4D4C]">
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M13 2 L3 14h9l-1 8 10-12h-9z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-[2rem] font-bold text-white uppercase tracking-wide">
                                        HIGH - ENERGY ECO
                                    </h3>
                                    <p className="text-neutral-400 text-sm md:text-[1.2rem] mt-1.5 leading-relaxed font-light max-w-[340px]">
                                        "Join a nationwide community of elite innovators and robotics athletes."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center items-center">
                        <img src={leaderboardImg} className="absolute top-30 w-full max-w-[550px] object-contain rounded-lg shadow-xl" alt="Leaderboard" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page6;