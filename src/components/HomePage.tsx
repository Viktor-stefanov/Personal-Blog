import Image from "next/image";
import PersonalProfile from "./PersonalProfile";

const HomePage = () => {
  return (
    <div className="relative">
      <Image
        src="/background.webp"
        alt="Cartoonish Image of a Circuit Board"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 -z-10"
      />

      <PersonalProfile />

      <div className="bg-background text-primary">
        <h2 className="text-2xl text-center">Recent Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Display the most recent blog posts. */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
