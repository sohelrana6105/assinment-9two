import React from "react";

import { NavLink } from "react-router";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
  const links = (
    <>
      <li className="text-[#005825] font-semibold">
        {" "}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#32ad69] p-2 rounded-[5px] text-white font-bold"
              : "text-gray-700"
          }
        >
          {" "}
          Home{" "}
        </NavLink>
      </li>
      <li className="text-[#005825] font-semibold">
        {" "}
        <NavLink
          to="/bills"
          className={({ isActive }) =>
            isActive
              ? "bg-[#32ad69] p-2 rounded-[5px] text-white font-bold"
              : "text-gray-700"
          }
        >
          {" "}
          Bills{" "}
        </NavLink>
      </li>

      <li className="text-[#005825] font-semibold ">
        {" "}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "bg-[#32ad69] p-2 rounded-[5px] text-white font-bold"
              : "text-gray-700"
          }
        >
          {" "}
          Profile{" "}
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="">
        <footer className="footer footer-horizontal footer-center bg-[#d4f7e5] text-base-content rounded p-10 ">
          <ul className="grid grid-flow-col gap-4 ">{links}</ul>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <NavLink to={"https://www.facebook.com/"} target="_blank">
                <FaFacebookSquare size={25} />
              </NavLink>
              <NavLink to={"https://www.instagram.com/"} target="_blank">
                <FaSquareInstagram size={25} />
              </NavLink>
              <NavLink to={"https://www.youtube.com/"} target="_blank">
                <FaSquareYoutube size={25} />
              </NavLink>
              <NavLink to={"https://web.whatsapp.com/"} target="_blank">
                <FaSquareWhatsapp size={25} />
              </NavLink>
            </div>
          </nav>
          <aside>
            <p> {new Date().getFullYear()} - Bill Pays Industries Ltd</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
