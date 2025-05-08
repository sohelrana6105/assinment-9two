import React from "react";

const NotFound = () => {
  return (
    <div className="text-5xl min-h-screen  flex flex-col  justify-center items-center gap-7 font-bold text-red-500">
      <div>
        <img
          className="md:w-[500px] md:h-[400px] rounded-2xl"
          src="/not-found.jpg"
          alt=""
        />
      </div>
      <h1> 4O4 Not Found</h1>
    </div>
  );
};

export default NotFound;
