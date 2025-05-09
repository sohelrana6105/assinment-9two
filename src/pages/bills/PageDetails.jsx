import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Authcontext } from "../../authProvider/Authcontext";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const PageDetails = () => {
  const { id } = useParams();

  const navigation = useNavigate();
  const { setBillAmount, paidList, setPaidList } = use(Authcontext);

  const [bill, setBill] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(false);
  const [ispaid, setIspaid] = useState(false);
  //
  useEffect(() => {
    // if (paidList.includes(parseInt(id))) {
    //   setIspaid(true);
    // }

    fetch("../billsInfo.json")
      .then((res) => res.json())
      .then((data) => {
        const bill = data.find((item) => item.id === parseInt(id));
        setBill(bill);
      });
  }, [id, paidList]);
  //
  if (!bill) {
    return (
      <div>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  const { organization, billType, amount, dueDate, icon } = bill;

  const paybillHnadler = () => {
    if (ispaid) {
      setValue(true);

      alert("Already paid");
      toast.error("Already paid");
      navigation("/bills");
      return setValue(true);
    }
    if (paidList.includes(parseInt(id))) {
      return setIspaid(true);
    } else if (!paidList.includes(parseInt(id))) {
      setPaidList([...paidList, parseInt(id)]);
      setIspaid(false);
    }

    setBillAmount((pre) => pre - amount);

    setShowModal(true);
  };

  return (
    <div className="bg-[#8affc3] p-4 flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-12 my-8 rounded">
      <div className="relative w-fit">
        <img className="w-60 rounded-xl" src={organization.icon} alt="" />

        <img
          className="absolute -bottom-3 right-1 h-6 w-10 md:h-6 md:w-7 lg:h-6 lg:w-10 rounded border border-[#90f787]"
          src={icon}
          alt=""
        />
      </div>

      <div className="lg:flex items-center gap-10">
        <h1 className="text-2xl font-bold mb-2"> {organization.name} </h1>
        <h2 className="font-extrabold text-[#0e6496]">
          {" "}
          <i>{billType}</i>{" "}
        </h2>

        <h2>
          <span className="font-bold"> Amount :</span>{" "}
          <span className="font-bold text-[#4a7407]">{amount}</span>{" "}
        </h2>
        <h2 className="text-[#220081] font-bold">Due to date : {dueDate} </h2>
      </div>

      <div>
        <button
          onClick={paybillHnadler}
          className={`bg-[#07f32f] hover:bg-[#3e6e46] px-8 py-1 rounded text-white ${
            value
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#07f32f] hover:bg-[#3e6e46]"
          }`}
        >
          {" "}
          Pay Bill
        </button>
      </div>

      {showModal && (
        <>
          <dialog open className="modal ">
            <div className="modal-box bg-[#23f381]">
              <h3 className="font-bold text-2xl text-white">
                Congratulations{" "}
              </h3>
              <p className="py-4 font-bold text-xl text-[#039b1d]">
                {" "}
                Bill Payment is succesfully !{" "}
              </p>

              <div className="flex justify-end gap-10 md:gap-20">
                <p className="text-green-600 text-2xl  bg-white px-2 py-2 rounded-full">
                  <FaCheck />{" "}
                </p>

                <div className="modal-action mt-0 w-32  ">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      onClick={() => {
                        setTimeout(() => {
                          navigation("/bills");
                        }, 200);
                      }}
                      className="btn"
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </>
      )}
    </div>
  );
};

export default PageDetails;
