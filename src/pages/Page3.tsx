import type { JourneyStep } from "../types"
import toolsIcon from "../assets/images/page3/noun-tools-1233695.svg";
import tajMahalIcon from "../assets/images/page3/noun-taj-mahal-8379012.svg";
import hotelIcon from "../assets/images/page3/noun-hotel-6701569.svg";
import usersIcon from "../assets/images/page3/noun-users-7695631.svg";

const Page3 = () => {
    const steps: JourneyStep[] = [
        { step: 1, img: toolsIcon, title: "BUILD YOUR TEAM" },
        { step: 2, img: tajMahalIcon, title: "COMPETE ACROSS INDIA" },
        { step: 3, img: hotelIcon, title: "EARN NATIONAL RANKING & VALUE" },
        { step: 4, img: usersIcon, title: "JOIN THE LEAGUE" }
    ];

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
                    {/* Horizontal connector line for Desktop only */}
                    <div className="hidden md:block absolute left-[12%] right-[12%] top-[64px] h-[2px] bg-blue-600 z-0" />

                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4 relative z-10">
                        {steps.map((stepItem, idx) => (
                            <div key={stepItem.step} className="flex flex-col items-center w-full md:w-1/4">
                                <div className="flex flex-col items-center text-center w-full">
                                    <div className="w-32 h-32 rounded-full bg-[#161618] border flex items-center justify-center relative shadow-xl cursor-pointer timeline-card">
                                        <div className="absolute inset-4 rounded-full border-[3px] border-blue-600 flex items-center justify-center">
                                            <img src={stepItem.img} className="w-12 h-12 invert object-contain" alt={stepItem.title} />
                                        </div>
                                    </div>
                                    <div className="w-[2px] h-8 bg-white/70 my-4" />
                                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF4D4C]">
                                        STEP {stepItem.step}
                                    </span>
                                    <h3 className="text-sm md:text-[1.625rem] tracking-[1.7px] text-white uppercase mt-2 max-w-[240px]">
                                        {stepItem.title}
                                    </h3>
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className="md:hidden w-[2px] h-16 bg-blue-600 my-6 shrink-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page3;