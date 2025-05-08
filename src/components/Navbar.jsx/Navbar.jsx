import React, { use, useState } from "react";
import BillLogo from "../../assets/BillLogo.jpg";
import { NavLink } from "react-router";
import { Authcontext } from "../../authProvider/Authcontext";
import { toast } from "react-toastify";
import { IoMdCloseCircle } from "react-icons/io";
const Navbar = () => {
  const { user, signOutUser, billAmount, loading } = use(Authcontext);
  const [showProfile, setShowProfile] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-white hover:bg-[#f1c685] bg-[#27bdb5]"
              : "text-white hover:bg-[#85f1ec]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink
            to={"/bills"}
            className={({ isActive }) =>
              isActive
                ? " text-white hover:bg-[#f1c685] bg-[#27bdb5]"
                : "text-white hover:bg-[#85f1ec]"
            }
          >
            Bills
          </NavLink>
        )}
      </li>
      <li>
        {user && (
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive
                ? " text-white hover:bg-[#f1c685] bg-[#27bdb5]"
                : "text-white hover:bg-[#85f1ec]"
            }
          >
            Profile
          </NavLink>
        )}
      </li>
    </>
  );

  const signOutHandler = () => {
    signOutUser()
      .then((result) => {
        console.log(result);

        toast.success("signout succesfully !");
      })
      .then((error) => {
        console.log(error);
      });
  };

  const profileHandler = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <div className="navbar bg-[#1473e1] shadow-sm rounded-xl">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className=" lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 bg-[#29dbb5] rounded-sm "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#29dbb5]  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" text-xl">
            <img src={BillLogo} className="h-10 w-10 m-3 rounded-full" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-1 lg:gap-5  lg:mr-3">
          {user ? (
            <>
              <div onClick={profileHandler} className="relative ">
                <span className="lg:hidden md:hidden mr-2 text-[#0e258a] font-bold">
                  {user.displayName}
                </span>
                <div className="avatar avatar-placeholder lg:flex md:flex items-center gap-4 ">
                  <span className="mr-2 text-white hidden lg:block md:block">
                    {user.email}
                  </span>
                  <div className="bg-neutral text-neutral-content w-12 rounded-full">
                    <span className="text-2xl font-bold text-[#866dca]">
                      <img
                        src={user.photoURL ? user.photoURL : "/default.png"}
                        alt=""
                      />
                    </span>
                  </div>
                </div>

                <div
                  className={`absolute top-16 md:top-16   lg:top-16 right-0 lg:w-48 md:w-48 w-32 flex flex-col lg:gap-2 bg-[#dba2a2] rounded-md z-10 ${
                    showProfile ? "block" : "hidden"
                  }`}
                >
                  <p className="text-[#220a0a] font-bold text-xs md:mt-2 md:text-[16px] hidden lg:block md:block">
                    {" "}
                    {user.displayName}{" "}
                  </p>
                  <p className="text-[#220a0a] font-bold text-xs md:mt-2 md:text-[16px]">
                    {" "}
                    {user.email}{" "}
                  </p>

                  <p className="font-bold text-xl mb-3">
                    Balance :{" "}
                    <span className="text-[#0d66ec]">{billAmount}</span>
                  </p>
                  <div>
                    <button
                      onClick={signOutHandler}
                      className="px-5 py-1 rounded-xl hover:bg-[#65b898] bg-[#a618ca] text-white "
                    >
                      Sign Out
                    </button>
                  </div>

                  <div className=" mt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowProfile(false);
                      }}
                      className=" rounded-xl hover:bg-[#5c899e] bg-[#6f2086] text-white"
                    >
                      <IoMdCloseCircle size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : loading ? (
            <p>
              <span className="loading loading-bars loading-xl"></span>
            </p>
          ) : (
            <>
              <button className="btn hover:bg-[#65b898] bg-[#921092] text-white ">
                <NavLink
                  to={"/login"}
                  className={({ isActive }) => (isActive ? " " : "  ")}
                >
                  Login
                </NavLink>
              </button>

              <button className="btn hover:bg-[#65b898] bg-[#a618ca] text-white ">
                <NavLink
                  to={"/register"}
                  className={({ isActive }) => (isActive ? " " : "  ")}
                >
                  Register
                </NavLink>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
