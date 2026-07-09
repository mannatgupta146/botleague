import toolsIcon from "../assets/images/page3/noun-tools-1233695.svg";
import tajMahalIcon from "../assets/images/page3/noun-taj-mahal-8379012.svg";
import hotelIcon from "../assets/images/page3/noun-hotel-6701569.svg";
import usersIcon from "../assets/images/page3/noun-users-7695631.svg";

const Page3 = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#09090A] text-white pt-20 pb-16 px-6 md:px-14 lg:px-20 overflow-hidden flex flex-col justify-center border-t border-neutral-900">
            <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
                <span className="text-xl md:text-[1.625rem] font-bold uppercase tracking-widest text-[#FF4D4C] block mb-3">
                    USER JOURNEY
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white mb-4">
                    YOUR PATH TO THE LEAGUE
                </h2>

                <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base mb-20">
                    From custom engineering to elite team matches, follow the definitive route to prove your squad on the national stage.
                </p>

                <div className="relative max-w-5xl mx-auto mt-8">
                    <div className="hidden md:block absolute left-[12%] right-[12%] top-[64px] h-[2px] bg-blue-600 z-0" />
                    <div className="md:hidden absolute top-[64px] bottom-[180px] w-[2px] bg-blue-600 left-1/2 -translate-x-1/2 z-0" />

                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-4 relative z-10">
                        <div className="flex flex-col items-center text-center md:w-1/4">
                            <div className="w-32 h-32 rounded-full bg-[#161618] border border-neutral-800 flex items-center justify-center relative shadow-xl">
                                <div className="absolute inset-4 rounded-full border-[3px] border-blue-600 flex items-center justify-center">
                                    <img src={toolsIcon} className="w-12 h-12 invert object-contain" alt="Build Your Team" />
                                </div>
                            </div>
                            <div className="w-[2px] h-8 bg-white/70 my-4" />
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF4D4C]">
                                STEP 1
                            </span>
                            <h3 className="text-sm md:text-[1.625rem] tracking-[1.7px] text-white uppercase mt-2 max-w-[240px]">
                                BUILD YOUR TEAM
                            </h3>
                        </div>

                        <div className="flex flex-col items-center text-center md:w-1/4">
                            <div className="w-32 h-32 rounded-full bg-[#161618] border border-neutral-800 flex items-center justify-center relative shadow-xl">
                                <div className="absolute inset-4 rounded-full border-[3px] border-blue-600 flex items-center justify-center">
                                    <img src={tajMahalIcon} className="w-12 h-12 invert object-contain" alt="Compete Across India" />
                                </div>
                            </div>
                            <div className="w-[2px] h-8 bg-white/70 my-4" />
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF4D4C]">
                                STEP 2
                            </span>
                            <h3 className="text-sm md:text-[1.625rem] tracking-[1.7px] text-white uppercase mt-2 max-w-[240px]">
                                COMPETE ACROSS INDIA
                            </h3>
                        </div>

                        <div className="flex flex-col items-center text-center md:w-1/4">
                            <div className="w-32 h-32 rounded-full bg-[#161618] border border-neutral-800 flex items-center justify-center relative shadow-xl">
                                <div className="absolute inset-4 rounded-full border-[3px] border-blue-600 flex items-center justify-center">
                                    <img src={hotelIcon} className="w-12 h-12 invert object-contain" alt="Earn National Ranking" />
                                </div>
                            </div>
                            <div className="w-[2px] h-8 bg-white/70 my-4" />
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF4D4C]">
                                STEP 3
                            </span>
                            <h3 className="text-sm md:text-[1.625rem] tracking-[1.7px] text-white uppercase mt-2 max-w-[240px]">
                                EARN NATIONAL RANKING & VALUE
                            </h3>
                        </div>

                        <div className="flex flex-col items-center text-center md:w-1/4">
                            <div className="w-32 h-32 rounded-full bg-[#161618] border border-neutral-800 flex items-center justify-center relative shadow-xl">
                                <div className="absolute inset-4 rounded-full border-[3px] border-blue-600 flex items-center justify-center">
                                    <img src={usersIcon} className="w-12 h-12 invert object-contain" alt="Join the League" />
                                </div>
                            </div>
                            <div className="w-[2px] h-8 bg-white/70 my-4" />
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF4D4C]">
                                STEP 4
                            </span>
                            <h3 className="text-sm md:text-[1.625rem] tracking-[1.7px] text-white uppercase mt-2 max-w-[240px]">
                                JOIN THE LEAGUE
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page3;