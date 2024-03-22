import friends1 from "../assets/friend_profile_pic1.png";
import friends2 from "../assets/friend_profile_pic2.png";
import squad from "../assets/squad.png";
const FriendsBar = () => {
  return (
    <>
      <div className="-right-20 absolute bg-gray-600 w-40">
        <div className="flex flex-col gap-6 ">

        <img src={squad} alt="squad" className="h-3 w-3" />
        <button className="bg-gray-500 py-1 text-lg">+</button>
        <img src={friends1} alt="friends1" className="h-8 w-8" />
        <img src={friends2} alt="friends2" className="h-8 w-8" />
        </div>
      </div>
    </>
  );
};

export default FriendsBar;
