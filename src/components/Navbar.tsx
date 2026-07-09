import { useState } from "react"
import logoImg from "../assets/images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full px-6 md:px-14 lg:px-20 flex items-center justify-between border-b-[0.031rem] border-b-[#ef1313] bg-[#1A1919] z-50">
          <div className="left shrink-0">
            <img className="h-12 md:h-16" src={logoImg} alt="BotLeague" />
          </div>
          
          <div className="center hidden md:flex gap-6 lg:gap-10">
            <h1 className="text-[1.2rem] lg:text-[1.4rem] font-light border-b-2 border-transparent hover:border-[#FF4D4C] pb-1 cursor-pointer transition-all duration-200">Events</h1>
            <h1 className="text-[1.2rem] lg:text-[1.4rem] font-light border-b-2 border-transparent hover:border-[#FF4D4C] pb-1 cursor-pointer transition-all duration-200">Programs</h1>
            <h1 className="text-[1.2rem] lg:text-[1.4rem] font-light border-b-2 border-transparent hover:border-[#FF4D4C] pb-1 cursor-pointer transition-all duration-200">Community</h1>
            <h1 className="text-[1.2rem] lg:text-[1.4rem] font-light border-b-2 border-transparent hover:border-[#FF4D4C] pb-1 cursor-pointer transition-all duration-200">Ranks</h1>
          </div>
          
          <div className="right hidden md:flex gap-3 md:gap-6 lg:gap-10 items-center">
            <button className="text-[0.9rem] md:text-[1.2rem] hover:bg-white hover:text-black hover:border-0 transition-all duration-200 cursor-pointer px-3 md:px-4 py-0.5 rounded-md border active:scale-95">LOGIN</button>
            <button className="text-[0.9rem] md:text-[1.2rem] bg-brand-gradient transition-all duration-200 cursor-pointer px-3 md:px-4 py-1 rounded-md hover:border hover:bg-transparent active:scale-95">REGISTER NOW</button>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-50 relative"
            aria-label="Toggle Menu"
          >
            <span className={`h-[2px] w-full bg-[#FF4D4C] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
            <span className={`h-[2px] w-full bg-[#FF4D4C] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-[2px] w-full bg-[#FF4D4C] transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-[-9px]' : ''}`}></span>
          </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#09090A]/98 z-40 flex flex-col items-center justify-center gap-10 md:hidden animate-fade-in">
          <h1 className="text-xl font-bold tracking-widest text-white cursor-pointer hover:text-[#FF4D4C] transition-colors" onClick={() => setIsOpen(false)}>BATTLE OF ROBOT RUSSIA</h1>
          <h1 className="text-xl font-bold tracking-widest text-white cursor-pointer hover:text-[#FF4D4C] transition-colors" onClick={() => setIsOpen(false)}>HOST</h1>
          <h1 className="text-xl font-bold tracking-widest text-white cursor-pointer hover:text-[#FF4D4C] transition-colors" onClick={() => setIsOpen(false)}>CONTACT US</h1>
          <h1 className="text-xl font-bold tracking-widest text-white cursor-pointer hover:text-[#FF4D4C] transition-colors" onClick={() => setIsOpen(false)}>ABOUT US</h1>
          
          <div className="flex gap-4 mt-6">
            <button className="text-[1rem] hover:bg-white hover:text-black transition-all duration-200 cursor-pointer px-5 py-2 rounded-md border active:scale-95 text-white" onClick={() => setIsOpen(false)}>LOGIN</button>
            <button className="text-[1rem] bg-brand-gradient transition-all duration-200 cursor-pointer px-5 py-2 rounded-md active:scale-95 text-white" onClick={() => setIsOpen(false)}>REGISTER NOW</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar