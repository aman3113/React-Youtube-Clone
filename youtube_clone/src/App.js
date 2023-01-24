import Header from "./Components/Header";
import FixedSideBar from "./Components/DynamicSideBar";
import HomePage from "./Components/HomePage";
import { useSelector } from "react-redux";

function App() {
  const isSideBarVisible = useSelector(
    (store) => store.toggle.isSideBarVisible
  );

  return (
    <div className=" w-screen h-screen flex flex-col box-border relative overflow-x-hidden">
      <Header />
      {isSideBarVisible ? <FixedSideBar /> : null}
      <HomePage />
    </div>
  );
}

export default App;
