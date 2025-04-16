import { react } from "react";
import { Link } from "react-router-dom";
//
const Welcome = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold p-2 text-center text-gray-800">
          {" "}
          Task Tracker with Calendar Integration and Notifications
        </h1>
        <p className="mt-2 p-2 ">
          View all Task
          <Link to="/alltask" className="text-blue-500  p-2">
            Click Here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Welcome;
