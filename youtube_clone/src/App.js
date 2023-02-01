import Header from "./Components/Header";
import FixedSideBar from "./Components/DynamicSideBar";
import HomePage from "./Components/HomePage";
import LiveChatPage from "./Components/LiveChatPage";
import VideoPage from "./Components/VideoPage";
import ErrorElement from "./ErrorElement";
import { useSelector } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const isSideBarVisible = useSelector((store) => store.app.isSideBarVisible);

  const AppLayout = () => (
    <div className=" w-screen h-screen flex flex-col box-border relative overflow-x-hidden">
      <Header />
      {isSideBarVisible ? <FixedSideBar /> : null}
      <Outlet />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/watch",
          element: <VideoPage />,
        },
        {
          path: "/live",
          element: <LiveChatPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
