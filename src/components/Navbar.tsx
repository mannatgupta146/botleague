import logoImg from "../assets/images/logo.png"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full px-20 flex items-center justify-between border-b-[0.031rem] border-b-[#ef1313] bg-[#1A1919] z-50">
        <div className="left">
          <img className="h-16" src={logoImg} alt="" />
        </div>
        <div className="center flex gap-10">
          <h1 className="text-[1.4rem] font-light">Events</h1>
          <h1 className="text-[1.4rem] font-light">Programs</h1>
          <h1 className="text-[1.4rem] font-light">Community</h1>
          <h1 className="text-[1.4rem] font-light">Ranks</h1>
        </div>
        <div className="right flex gap-10">
          <button className="text-[1.2rem] hover:bg-white hover:text-black hover:border-0 transition-all duration-200 cursor-pointer px-4 py-0.5 rounded-md border">LOGIN</button>
          <button className="text-[1.2rem] bg-brand-gradient transition-all duration-200 cursor-pointer px-4 py-1 rounded-md hover:border hover:bg-transparent">REGISTER NOW</button>
        </div>
    </div>
  )
}

export default Navbar