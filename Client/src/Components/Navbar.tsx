import SoldierLevel from "../assets/soldier__level.png";
import logo from "../assets/home__logo.png";
const Navbar = () => {
  return (
    <>
      <div className=" ml-[5vw] mt-12 w-full">
        <div className="w-[90vw] flex justify-between">
          <ul className="flex gap-6 font-abc text-xl text-white uppercase tracking-widest">
            <li>Home</li>
            <li>Multiplayer</li>
            <li>Campaign</li>
            <li>Soldier</li>
            <li>store</li>
            <li>More</li>
          </ul>
          <div className="flex items-center gap-4">
            <img src={SoldierLevel} alt="SoldierLevel" className="h-14 w-14" />
            <img src={logo} alt="logo" className="h-8 w-32" />
          </div>
        </div>
        <div className="h-[1px] w-[50vw] bg-white"></div>
      </div>
    </>
  );
};

export default Navbar;
