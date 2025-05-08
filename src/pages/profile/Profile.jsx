import React, { use } from "react";
import { Authcontext } from "../../authProvider/Authcontext";
import { NavLink } from "react-router";

const Profile = () => {
  const { user } = use(Authcontext);
  const Name = user.displayName;
  const email = user.email;
  const userPhoto = user.photoURL;
  // console.log(userPhoto);

  return (
    <div className="mt-5 flex flex-col justify-center items-center bg-[url('/pro-bg2.jpg')] rounded py-6">
      <h1 className="text-5xl font-bold mb-8">User Profile</h1>
      <div className=" flex flex-col justify-center items-center">
        <img src="/public" alt="" />
        <p>
          <img
            className="w-28 h-28 rounded-full object-cover"
            src={userPhoto ? userPhoto : "/default.png"}
            alt="User Photo"
          />
        </p>

        <p className="text-2xl font-extrabold">
          {" "}
          <span className="text-[#3903b6]">User name :</span> {Name}
        </p>
        <p className=" text-lg font-semibold mb-5">
          {" "}
          <span className="text-[#0351b6]"> User email :</span> {email}
        </p>
        <button className="btn btn-primary">
          <NavLink to={"/updateprofileInfo"}>Update profile</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Profile;
