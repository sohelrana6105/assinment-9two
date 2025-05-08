import React from "react";
import { NavLink, useNavigate } from "react-router";
import PageDetails from "./PageDetails";

const BillPage = ({ bill }) => {
  //   console.log(bill.id);

  const { id, billType, icon, organization } = bill;
  const navigation = useNavigate();

  const PageDetailsHandler = async (id) => {
    navigation(`/pageDetails/${id}`);
  };
  return (
    <>
      <div className="bg-[#FFFF] shadow-2xl ">
        <div className="  rounded-2xl flex  items-center lg:items-center md:items-start  gap-4 p-3  md:justify-around lg:justify-around lg:px-10 md:py-6 lg:p-6 ">
          <div>
            <img
              className="h-44 w-44 md:h-64 md:w-72 lg:w-96 rounded-4xl border-2 border-[#733] "
              src={organization.icon}
              alt=""
            />
          </div>

          <div className="lg:flex items-center gap-5">
            <div className="md:flex flex-col lg:flex-row items-center gap-4 ">
              <h1 className="text-xl md:text-3xl font-bold mb-3 md">
                {organization.name}
              </h1>
              <div>
                <div className="flex flex-col items-center gap-1 lg:gap-4  mt-1 md:mt-3 lg:mx-16">
                  <div className="flex items-center lg:gap-3">
                    <span>
                      {" "}
                      <img
                        className="h-6 w-6 md:h-12 md:w-12 rounded-full border-2 border-[#5007c5] "
                        src={icon}
                        alt={icon.name}
                      />
                    </span>
                    <span className="text-xl">
                      <i> {billType} </i>
                    </span>
                  </div>
                  {/* <p>
                    Amount : <span className="font-bold"> {amount} </span>
                  </p> */}
                  {/* <p>
                    Due to Date : <span> {dueDate} </span>{" "}
                  </p> */}
                </div>
              </div>
            </div>

            <div className="btndiv hidden md:block md:mt-3 lg:block">
              <NavLink>
                {/* to={"/pageDetails"} */}
                <button
                  onClick={() => PageDetailsHandler(id)}
                  className="px-7 py-3 lg:py-4 bg-[#09a817] rounded-xl hover:bg-[#594169] text-white "
                >
                  Payment
                </button>
              </NavLink>
            </div>
          </div>

          {/* only for lg button */}
        </div>

        <div className="btndiv">
          <NavLink>
            <button
              onClick={() => PageDetailsHandler(id)}
              className="btn my-3 bg-[#09a817] rounded-xl hover:bg-[#594169] text-white lg:hidden md:hidden"
            >
              Payment
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BillPage;
