import sponsor1 from "../assets/images/page7/1.png"
import sponsor2 from "../assets/images/page7/2.png"
import sponsor3 from "../assets/images/page7/3.png"
import sponsor4 from "../assets/images/page7/4.png"
import sponsor5 from "../assets/images/page7/5.png"
import sponsor6 from "../assets/images/page7/6.png"

const Page7 = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#09090A] text-white py-24 px-6 md:px-14 lg:px-20 overflow-hidden flex flex-col justify-center border-t border-neutral-900">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white mb-16 text-left">
                    JOIN THE ECOSYSTEM
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md border border-neutral-800 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                        <div>
                            <h3 className="text-xl md:text-[2rem] text-white uppercase mb-8 tracking-wide leading-none">
                                BECOME IN JUDGE
                            </h3>
                            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-[#161618] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full bg-[#161618] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Enroll"
                                    className="w-full bg-[#161618] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                />
                                <button type="submit" className="w-full bg-brand-gradient text-white font-bold py-3.5 px-6 rounded-lg uppercase tracking-wider hover:opacity-90 transition-opacity mt-2 text-sm md:text-xl">
                                    SIGN UP
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md border border-neutral-800 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                        <div>
                            <h3 className="text-xl md:text-[2rem] text-white uppercase mb-8 tracking-wide leading-none">
                                VOLUNTEER
                            </h3>
                            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-[#161618] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full bg-[#161618] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Enroll"
                                    className="w-full bg-[#161618] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                />
                                <button type="submit" className="w-full bg-brand-gradient text-white font-bold py-3.5 px-6 rounded-lg uppercase tracking-wider hover:opacity-90 transition-opacity mt-2 text-sm md:text-xl">
                                    SIGN UP
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md border border-neutral-800 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                        <div>
                            <h3 className="text-xl md:text-[2rem] text-white uppercase mb-8 tracking-wide leading-none">
                                COMMUNITY MEMBER
                            </h3>
                            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-[#161618] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full bg-[#161618] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Enroll"
                                    className="w-full bg-[#161618] border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                />
                                <button type="submit" className="w-full bg-brand-gradient text-white font-bold py-3.5 px-6 rounded-lg uppercase tracking-wider hover:opacity-90 transition-opacity mt-2 text-sm md:text-xl">
                                    SIGN UP
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-neutral-900/60">
                    <h3 className="text-3xl md:text-[2.3rem] font-bold uppercase tracking-wider text-white mb-12 text-left">
                        SPONSORS
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 items-center">
                        <div className="flex items-center justify-center gap-6">
                            <img src={sponsor1} className="h-20 md:h-24 w-auto object-contain" alt="NIT Delhi" />
                            <span className="text-lg md:text-[1.6rem] font-bold tracking-widest text-[#B3B3B3] uppercase">
                                NIT DELHI
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-6">
                            <img src={sponsor2} className="h-20 md:h-24 w-auto object-contain" alt="Indian Bit" />
                            <span className="text-lg md:text-[1.6rem] font-bold tracking-widest text-[#B3B3B3] uppercase">
                                INDIAN BIT
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-6">
                            <img src={sponsor3} className="h-20 md:h-24 w-auto object-contain" alt="NIT Silchar" />
                            <span className="text-lg md:text-[1.6rem] font-bold tracking-widest text-[#B3B3B3] uppercase">
                                NIT SILCHAR
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-6">
                            <img src={sponsor4} className="h-20 md:h-24 w-auto object-contain" alt="Delhivery Robotics" />
                            <span className="text-lg md:text-[1.6rem] font-bold tracking-widest text-[#B3B3B3] uppercase">
                                ROBO COMPANY
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-6">
                            <img src={sponsor5} className="h-20 md:h-24 w-auto object-contain" alt="IIT Bombay" />
                            <span className="text-lg md:text-[1.6rem] font-bold tracking-widest text-[#B3B3B3] uppercase">
                                IIT BOMBAY
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-6">
                            <img src={sponsor6} className="h-20 md:h-24 w-auto object-contain" alt="General Robotics" />
                            <span className="text-lg md:text-[1.6rem] font-bold tracking-widest text-[#B3B3B3] uppercase">
                                ROBO COMPANY
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page7;