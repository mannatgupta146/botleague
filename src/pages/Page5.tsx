import { useState } from "react"
import type { Sport } from "../types"
import sport1 from "../assets/images/page5/1.png"
import sport2 from "../assets/images/page5/2.png"
import sport3 from "../assets/images/page5/3.png"
import sport4 from "../assets/images/page5/4.png"
import sport5 from "../assets/images/page5/5.png"
import sport6 from "../assets/images/page5/6.png"
import page5Img from "../assets/images/page5/main.png"

const Page5 = () => {
    const [isImgTapped, setIsImgTapped] = useState(false);
    const sports: Sport[] = [
        { id: 0, img: sport1, name: "Robo Race" },
        { id: 1, img: sport2, name: "Line Follower" },
        { id: 2, img: sport3, name: "RC Racing" },
        { id: 3, img: sport4, name: "FPV Drone Racing & Aeromodelling" },
        { id: 4, img: sport5, name: "Robo Hockey" },
        { id: 5, img: sport6, name: "Robo War" }
    ];

    return (
        <section className="relative min-h-screen w-full bg-[#09090A] text-white py-24 px-6 md:px-14 lg:px-20 overflow-hidden flex flex-col justify-center border-t border-neutral-900">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#FF4D4C] block mb-3">
                    SPORTS
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white mb-16 text-left">
                    COMPETITION DISCIPLINES
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sports.map((sport) => (
                        <div
                            key={sport.id}
                            className="flex flex-col rounded-xl overflow-hidden border bg-[#131212]/90 h-full group cursor-pointer sports-card"
                        >
                            <div className="aspect-4/3 w-full overflow-hidden">
                                <img src={sport.img} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" alt={sport.name} />
                            </div>
                            <div className="bg-[#161618] h-20 px-4 flex items-center justify-center border-t border-neutral-900">
                                <h3 className="text-lg md:text-xl font-bold tracking-wide text-white text-center">
                                    {sport.name}
                                </h3>
                            </div>
                        </div>
                    ))}

                    <div 
                        onClick={() => setIsImgTapped(!isImgTapped)}
                        className="lg:col-span-2 relative w-full h-full min-h-[260px] lg:min-h-0 rounded-xl overflow-hidden border border-neutral-800 flex flex-col items-center justify-center cursor-pointer bg-[#131212]/90 group transition-all duration-300 active:border-yellow-500"
                    >
                        {/* Text placeholder for mobile/tapped state */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 z-10 ${isImgTapped ? 'opacity-0 pointer-events-none' : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-0'}`}>
                            <svg className="w-12 h-12 text-[#FF4D4C] mb-3 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <path d="M9 9h6v6H9z" />
                                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
                            </svg>
                            <h4 className="text-xl font-bold uppercase tracking-widest text-white">REVEAL ARENA BLUEPRINT</h4>
                            <p className="text-xs text-neutral-400 mt-2">Tap anywhere on this card to view</p>
                        </div>

                        <img 
                            src={page5Img} 
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${isImgTapped ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`} 
                            alt="Circuit Illustration" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page5