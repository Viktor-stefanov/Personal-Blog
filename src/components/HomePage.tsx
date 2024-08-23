import Image from "next/image";
import PersonalProfile from "./PersonalProfile";
import RecentPosts from "./RecentPosts";

const HomePage = () => {
  return (
    <div className="relative ">
      <Image
        src="/background.webp"
        alt="Cartoonish Image of a Circuit Board"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 -z-10"
      />
      <div className="w-[70%] m-auto p-4 bg-background text-primary border-2 border-primary border-dashed border-opacity-40">
        <PersonalProfile />

        <RecentPosts />
      </div>
    </div>
  );
};

export default HomePage;
