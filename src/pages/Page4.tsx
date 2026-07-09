import type { Category } from "../types";
import page4Img from "../assets/images/page4/main.png";
import cat1 from "../assets/images/page4/1.png";
import cat2 from "../assets/images/page4/2.png";
import cat3 from "../assets/images/page4/3.png";
import cat4 from "../assets/images/page4/4.png";

const Page4 = () => {
    const categories: Category[] = [
        { id: 1, img: cat1, title: "MINI MAKERS", description: "Where Creativity Meets Logic." },
        { id: 2, img: cat2, title: "JUNIOR INNOVATORS", description: "Engineering & Strategy Fundamentals." },
        { id: 3, img: cat3, title: "YOUNG ENGINEERS", description: "Advanced Wireless & Autonomous Control." },
        { id: 4, img: cat4, title: "ROBO MINDS", description: "Elite Professional Sports & Robotics." }
    ];

    return (
        <section className="relative min-h-screen w-full bg-[#09090A] text-white py-24 px-6 md:px-14 lg:px-20 overflow-hidden flex flex-col justify-center border-t border-neutral-900">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
                    <div className="lg:col-span-7 flex flex-col">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-12 text-left">
                            WHAT IS BOTLEAGUE?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="flex flex-col text-left">
                                <span className="text-xl md:text-2xl font-bold text-[#FF4D4C] mb-2">1.</span>
                                <h3 className="text-lg md:text-[2.2rem] font-bold text-white uppercase tracking-wide leading-none mb-4">
                                    STRUCTURED EVENTS
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-[1.1rem] leading-relaxed font-light">
                                    Track status, brackets, and live standings on our official portals.
                                </p>
                            </div>

                            <div className="flex flex-col text-left">
                                <span className="text-xl md:text-2xl font-bold text-[#FF4D4C] mb-2">2.</span>
                                <h3 className="text-lg md:text-[2.2rem] font-bold text-white uppercase tracking-wide leading-none mb-4">
                                    DIGITAL IDENTITY
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-[1.1rem] leading-relaxed font-light">
                                    Build a verified profile to showcase your robots, stats, and achievements.
                                </p>
                            </div>

                            <div className="flex flex-col text-left">
                                <span className="text-xl md:text-2xl font-bold text-[#FF4D4C] mb-2">3.</span>
                                <h3 className="text-lg md:text-[2.2rem] font-bold text-white uppercase tracking-wide leading-none mb-4">
                                    NATIONAL RANKING
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-[1.1rem] leading-relaxed font-light">
                                    Earn official rank points to qualify for championships and prize pools.
                                </p>
                            </div>

                            <div className="flex flex-col text-left">
                                <span className="text-xl md:text-2xl font-bold text-[#FF4D4C] mb-2">4.</span>
                                <h3 className="text-lg md:text-[2.2rem] font-bold text-white uppercase tracking-wide leading-none mb-4">
                                    CAREER PATHWAY
                                </h3>
                                <p className="text-neutral-400 text-sm md:text-[1.1rem] leading-relaxed font-light">
                                    Connect with universities and tech companies seeking robotics talent.
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
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="flex flex-col justify-between p-8 rounded-xl bg-[#131212]/80 backdrop-blur-md min-h-[340px] text-left border cursor-pointer interactive-card"
                            >
                                <div>
                                    <img src={category.img} className="w-24 h-24 mb-6 object-contain" alt={category.title} />
                                    <h3 className="text-lg md:text-[2.3rem] leading-[1.1] font-bold text-white uppercase mb-2 tracking-wide">
                                        {category.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm md:text-[1.1rem] mb-6 font-light">
                                        {category.description}
                                    </p>
                                </div>
                                <span className="text-xs md:text-[1rem] px-4 font-bold uppercase tracking-widest text-[#FF4D4C] hover:text-[#ff3333] transition-colors mt-auto flex items-center gap-1 cursor-pointer">
                                    LEARN MORE →
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page4;
