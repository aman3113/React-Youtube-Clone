import FixedSideBar from "./FixedSideBar";
import TagsSection from "./TagsSection";
import DisplaySection from "./DisplaySection";

const HomePage = () => {
  return (
    <div className="w-screen flex h-full absolute top-16 ">
      <FixedSideBar />
      <div className="w-full ml-20 mt-16">
        <TagsSection />
        <DisplaySection />
      </div>
    </div>
  );
};

export default HomePage;
