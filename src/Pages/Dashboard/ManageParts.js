import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManagePartsRow from "./ManagePartsRow";

const ManageParts = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("https://computerx.herokuapp.com/parts/", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part) => (
              <ManagePartsRow
                key={part._id}
                part={part}
                refetch={refetch}
              ></ManagePartsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageParts;