import FixedSideBar from "./FixedSideBar";
import TagsSection from "./TagsSection";
import DisplaySection from "./DisplaySection";

const HomePage = () => {
  return (
    <div className="w-screen flex h-full absolute top-16 left-0 ">
      <FixedSideBar />
      <div className="w-screen pl-20 mt-16">
        <TagsSection />
        <DisplaySection />
      </div>
    </div>
  );
};

export default HomePage;
