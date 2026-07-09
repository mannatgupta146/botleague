import React from "react"
import type { UpcomingEvent, PastResult } from "../types"

const Page2 = () => {
    const upcomingEvents: UpcomingEvent[] = [
        { id: 1, title: "Event in Mumbai", date: "11/11/25", location: "BKC", category: "Robowar 30kg" },
        { id: 2, title: "Event in Delhi", date: "11/11/25", location: "IIT Delhi", category: "Autonomous Maze" }
    ];

    const pastResults: PastResult[] = [
        { id: 1, title: "National Robowar Cup", winner: "Team Insane" },
        { id: 2, title: "IIT Bombay Techfest", winner: "Team Blitz" },
        { id: 3, title: "Pune Robo-Combat", winner: "Team Vapour" }
    ];

    return (
        <section className="relative min-h-screen w-full bg-[#09090A] text-white pt-20 pb-12 px-6 md:px-14 lg:px-20 overflow-hidden flex flex-col justify-center border-t border-neutral-900">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-8 text-left">
                    COMPETITIONS & EVENTS
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold uppercase tracking-wider text-[#FF4D4C] mb-6 text-left">
                            LIVE NOW
                        </h3>

                        <div className="bg-[#131212]/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-8 flex flex-col h-[480px] justify-between">
                            <div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-xl md:text-2xl font-bold tracking-wide text-white">
                                            Bengaluru Regionals
                                        </h4>
                                        <p className="text-neutral-400 text-sm mt-1">
                                            Combat Robotics 15kg
                                        </p>
                                    </div>
                                    <span className="bg-[#FF4D4C] text-white text-xs font-semibold px-2.5 py-0.5 rounded uppercase tracking-wider">
                                        Ongoing
                                    </span>
                                </div>

                                <hr className="border-neutral-800/60 my-6" />
                            </div>

                            <div className="relative w-full h-[280px] px-1">
                                <div className="absolute left-0 top-[10%] -translate-y-1/2 w-[18%] h-6 bg-neutral-800/90 rounded border border-neutral-700/60 hover:border-[#FF4D4C] hover:bg-neutral-800 transition-all duration-300 cursor-pointer" />
                                <div className="absolute left-0 top-[35%] -translate-y-1/2 w-[18%] h-6 bg-neutral-800/90 rounded border border-neutral-700/60 hover:border-[#FF4D4C] hover:bg-neutral-800 transition-all duration-300 cursor-pointer" />
                                <div className="absolute left-0 top-[65%] -translate-y-1/2 w-[18%] h-6 bg-neutral-800/90 rounded border border-neutral-700/60 hover:border-[#FF4D4C] hover:bg-neutral-800 transition-all duration-300 cursor-pointer" />
                                <div className="absolute left-0 top-[90%] -translate-y-1/2 w-[18%] h-6 bg-neutral-800/90 rounded border border-neutral-700/60 hover:border-[#FF4D4C] hover:bg-neutral-800 transition-all duration-300 cursor-pointer" />

                                <div className="absolute left-[41%] top-[22.5%] -translate-y-1/2 w-[18%] h-6 bg-neutral-800/90 rounded border border-neutral-700/60 hover:border-[#FF4D4C] hover:bg-neutral-800 transition-all duration-300 cursor-pointer" />
                                <div className="absolute left-[41%] top-[77.5%] -translate-y-1/2 w-[18%] h-6 bg-neutral-800/90 rounded border border-neutral-700/60 hover:border-[#FF4D4C] hover:bg-neutral-800 transition-all duration-300 cursor-pointer" />

                                <div className="absolute left-[82%] top-[50%] -translate-y-1/2 w-[18%] h-6 bg-neutral-800/90 rounded border border-neutral-700/60 hover:border-[#FF4D4C] hover:bg-neutral-800 transition-all duration-300 cursor-pointer" />

                                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M 18 10 L 29.5 10 L 29.5 22.5 L 41 22.5" fill="none" stroke="#FF4D4C" strokeWidth="0.5" />
                                    <path d="M 18 35 L 29.5 35 L 29.5 22.5 L 41 22.5" fill="none" stroke="#FF4D4C" strokeWidth="0.5" />

                                    <path d="M 18 65 L 29.5 65 L 29.5 77.5 L 41 77.5" fill="none" stroke="#FF4D4C" strokeWidth="0.5" />
                                    <path d="M 18 90 L 29.5 90 L 29.5 77.5 L 41 77.5" fill="none" stroke="#FF4D4C" strokeWidth="0.5" />

                                    <path d="M 59 22.5 L 70.5 22.5 L 70.5 50 L 82 50" fill="none" stroke="#FF4D4C" strokeWidth="0.5" />
                                    <path d="M 59 77.5 L 70.5 77.5 L 70.5 50 L 82 50" fill="none" stroke="#FF4D4C" strokeWidth="0.5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold uppercase tracking-wider text-neutral-300 mb-6 text-left">
                            UPCOMING
                        </h3>

                        <div className="flex flex-col gap-6">
                            {upcomingEvents.map((event) => (
                                <div key={event.id} className="bg-[#131212]/80 backdrop-blur-md border rounded-xl p-6 md:p-8 flex flex-col justify-between h-[228px] cursor-pointer interactive-card">
                                    <div>
                                        <h4 className="text-xl md:text-2xl font-bold tracking-wide text-white text-left">
                                            {event.title}
                                        </h4>

                                        <div className="grid grid-cols-3 gap-4 mt-6 text-left">
                                            <div>
                                                <span className="block text-[0.7rem] uppercase tracking-wider text-neutral-400 font-semibold">Date</span>
                                                <span className="block text-[0.95rem] font-bold text-white mt-1">{event.date}</span>
                                            </div>
                                            <div>
                                                <span className="block text-[0.7rem] uppercase tracking-wider text-neutral-400 font-semibold">Location</span>
                                                <span className="block text-[0.95rem] font-bold text-white mt-1">{event.location}</span>
                                            </div>
                                            <div>
                                                <span className="block text-[0.7rem] uppercase tracking-wider text-neutral-400 font-semibold">Category</span>
                                                <span className="block text-[0.95rem] font-bold text-white mt-1">{event.category}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full mt-4 bg-brand-gradient hover:opacity-90 active:scale-95 text-white font-bold py-3 rounded-lg uppercase tracking-widest text-sm transition-all duration-200 cursor-pointer">
                                        REGISTER
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold uppercase tracking-wider text-neutral-300 mb-6 text-left">
                            PAST RESULTS
                        </h3>

                        <div className="bg-[#131212]/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-8 flex flex-col h-[480px] shadow-xl">
                            <div className="flex flex-col gap-6">
                                {pastResults.map((result, idx) => (
                                    <React.Fragment key={result.id}>
                                        <div className="text-left group cursor-pointer">
                                            <h4 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-[#FF4D4C] transition-colors duration-200">
                                                {result.title}
                                            </h4>
                                            <p className="text-neutral-400 text-sm mt-1">
                                                Winner: {result.winner}
                                            </p>
                                        </div>
                                        {idx < pastResults.length - 1 && (
                                            <hr className="border-neutral-800/60" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page2;