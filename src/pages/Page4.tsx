import page4Img from "../assets/images/page4/main.png";
import cat1 from "../assets/images/page4/1.png";
import cat2 from "../assets/images/page4/2.png";
import cat3 from "../assets/images/page4/3.png";
import cat4 from "../assets/images/page4/4.png";

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
                        <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md min-h-[340px] text-left border border-neutral-800 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                            <div>
                                <img src={cat1} className="w-24 h-24 mb-6 object-contain" alt="Mini Makers" />
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

                        <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md min-h-[340px] text-left border border-neutral-800 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                            <div>
                                <img src={cat2} className="w-24 h-24 mb-6 object-contain" alt="Junior Innovators" />
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

                        <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md min-h-[340px] text-left border border-neutral-800 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                            <div>
                                <img src={cat3} className="w-24 h-24 mb-6 object-contain" alt="Young Engineers" />
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

                        <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md min-h-[340px] text-left border border-neutral-800 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                            <div>
                                <img src={cat4} className="w-24 h-24 mb-6 object-contain" alt="Robo Minds" />
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
