import PersonalProfile from "./PersonalProfile";
import RecentPosts from "./RecentPosts";

const HomePage = () => {
  return (
    <div className="mt-16">
      <PersonalProfile />
      <RecentPosts />
    </div>
  );
};

export default HomePage;
