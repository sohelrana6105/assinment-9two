import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BillPage from "./BillPage";

const Bills = () => {
  const bills = useLoaderData();
  const [value, setvalue] = useState("All");

  const handleFilterChange = (e) => {
    setvalue(e.target.value);
  };

  const filterBills =
    value === "All" ? bills : bills.filter((bill) => bill.billType === value);

  return (
    <>
      <div className="mt-10 flex flex-col gap-10 px-6 md:py-16 md:px-16  bg-[#d4f7e5] ">
        <div>
          <span className="font-bold text-xl text-[#010005]">
            {" "}
            Select Bill Type{" "}
          </span>

          <select
            onChange={handleFilterChange}
            className="border-3 border-[#461010] rounded"
          >
            <option value="All">All</option>
            <option value="Gas Bill">Gas</option>
            <option value="Internet Bill">Water</option>
            <option value="Water Bill">Electricity</option>
            <option value="Credit card Bill">Credit card Bill</option>
            <option value="Tuition Bill">Tuition Bill</option>
            <option value="Recharge Bill">Recharge Bill</option>
            <option value="TV Bill">TV Bill</option>
          </select>
        </div>

        {filterBills.map((bill) => (
          <BillPage key={bill.id} bill={bill}></BillPage>
        ))}
      </div>
    </>
  );
};

export default Bills;
