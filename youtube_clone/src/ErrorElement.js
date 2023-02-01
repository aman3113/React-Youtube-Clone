import { useRouteError } from "react-router-dom";

export const ErrorElement = () => {
  const errorStatus = useRouteError();
  console.log(errorStatus);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1>{errorStatus.message} </h1>
    </div>
  );
};
