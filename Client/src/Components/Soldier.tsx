import BackgroundImg from "../assets/menu__background.png";
import emblem from "../assets/soldier__BFemblem.png";
import FriendsBar from "./FriendsBar";
import Navbar from "./Navbar";
const Soldier = () => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 bottom-0 -z-40">
        <img
          src={BackgroundImg}
          alt="BackgroundImg"
          className="h-full w-full"
        />
      </div>
      <div className="absolute right-[20vw] -z-30">
        <img src={emblem} alt="emblem" className="h-[40vh]" />
      </div>
      <div className="absolute bg-slate-500">
        <Navbar />
          <FriendsBar />
        </div>
    </>
  );
};

export default Soldier;
