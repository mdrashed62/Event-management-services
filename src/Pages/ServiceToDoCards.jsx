import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

const ServiceToDoCards = ({ service }) => {
  const { _id, serviceName, serviceDate, imgUrl, price } = service;

  const [selectedStatus, setSelectedStatus] = useState(() => {
    return (
      localStorage.getItem(`serviceStatus-${_id}`) || service.serviceStatus
    );
  });

  const handleStatusChange = async (newStatus) => {
    setSelectedStatus(newStatus);

    localStorage.setItem(`serviceStatus-${_id}`, newStatus);

    try {
      const response = await fetch(
        `https://simple-services-server.vercel.app/purchaseServices/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ serviceStatus: newStatus }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update service status");
      }
    } catch (error) {
      console.error("Error updating service status:", error);
    }
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem(`serviceStatus-${_id}`);
    };
  }, [_id]);

  const getButtonColor = () => {
    switch (selectedStatus) {
      case "working":
        return "bg-yellow-500";
      case "completed":
        return "bg-green-500";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table mb-24">
        <thead>
          <tr>
            <th>Image</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Purchase Date</th>
            <th>Service Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={imgUrl} alt="" />
                  </div>
                </div>
              </div>
            </td>
            <td className="w-[300px] text-xl">
              <h3>{serviceName}</h3>
            </td>
            <td className="w-[150px]">
              <p>{price}</p>
            </td>
            <td>
              <span className="badge badge-ghost">{serviceDate}</span>
            </td>
            <td>
              <div className="dropdown">
                <button
                  className={`btn text-white bg-red-500 btn-ghost btn-xs ${getButtonColor()}`}
                >
                  {selectedStatus} <FaAngleDown />
                </button>
                <ul className="menu dropdown-content">
                  <li>
                    <button  onClick={() => handleStatusChange("Working")}>
                      Working
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleStatusChange("Completed")}>
                      Completed
                    </button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ServiceToDoCards;
