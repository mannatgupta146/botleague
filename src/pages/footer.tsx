import yt from "../assets/images/footer/1.png"
import ig from "../assets/images/footer/2.png"
import fb from "../assets/images/footer/3.png"
import tw from "../assets/images/footer/4.png"

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#09090A] text-white pt-16 pb-12 px-6 md:px-14 lg:px-20 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
                    <div className="md:col-span-8">
                        <h4 className="text-white font-bold tracking-wider text-3xl uppercase mb-8">
                            QUICK LINKS
                        </h4>
                        <div className="grid grid-cols-2 gap-8 max-w-md">
                            <div className="flex flex-col gap-3">
                                <a href="#arena" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">The Arena</a>
                                <a href="#episodes" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">Episodes</a>
                                <a href="#rankings" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">National Rankings</a>
                                <a href="#programs" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">Programs</a>
                                <a href="#rulebooks" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">Rulebooks</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a href="#team" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">Join the Team</a>
                                <a href="#sponsorships" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">Sponsorships</a>
                                <a href="#help" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">Help Center</a>
                                <a href="#contact" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">Contact Us</a>
                                <a href="#legal" className="text-[#999999] hover:text-[#FF4D4C] active:text-[#FF4D4C] transition-colors text-[1.2rem] font-semibold">Legal</a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col items-start md:items-end">
                        <div className="text-left md:text-right">
                            <h4 className="text-white font-semibold tracking-wider text-2xl uppercase mb-8">
                                SOCIAL MEDIA
                            </h4>
                            <div className="flex items-center gap-6 mt-2">
                                <a href="https://github.com/mannatgupta146" target="_blank" rel="noopener noreferrer">
                                    <img src={yt} className="h-13 w-13 object-contain hover:opacity-80 transition-opacity cursor-pointer" alt="YouTube" />
                                </a>
                                <a href="https://www.instagram.com/mannat_1411/" target="_blank" rel="noopener noreferrer">
                                    <img src={ig} className="h-9 w-9 object-contain hover:opacity-80 transition-opacity cursor-pointer" alt="Instagram" />
                                </a>
                                <a href="https://www.linkedin.com/in/mannatgupta146/" target="_blank" rel="noopener noreferrer">
                                    <img src={fb} className="h-9 w-9 object-contain hover:opacity-80 transition-opacity cursor-pointer" alt="Facebook" />
                                </a>
                                <a href="https://x.com/mannatgupta146" target="_blank" rel="noopener noreferrer">
                                    <img src={tw} className="h-9 w-9 object-contain hover:opacity-80 transition-opacity cursor-pointer" alt="Twitter" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;