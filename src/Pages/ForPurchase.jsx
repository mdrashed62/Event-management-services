import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const ForPurchase = () => {
  const serviceDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const services = serviceDetails.find((service) => service._id === id);
  document.title = "Purchase Service | Epic Eventistry ";

  const {
    _id,
    price,
    imgURL,
    serviceName,
    providerName,
    providerEmail,
    userEmail,
    username,
  } = services;

  // console.log(services);

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;

    const serviceName = form.serviceName.value;
    const imgUrl = form.serviceImage.value;
    const price = form.price.value;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const serviceDate = form.serviceDate.value;
    const servicePlan = form.servicePlan.value;
    const userEmail = user?.email;
    const username = user?.displayName;
    const serviceStatus = "pending";

    const purchaseServices = {
      serviceDate,
      imgUrl,
      servicePlan,
      providerName,
      providerEmail,
      serviceName,
      price,
      userEmail,
      username,
      serviceStatus,
    };

    console.log(purchaseServices);

    //send data to the server for new collection

    fetch("https://simple-services-server.vercel.app/purchaseServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchaseServices),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Successfully Purchased",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    form.reset();
  };

  return (
    <div className=" mb-4  bg-gray-300 mt-6 p-20 rounded-lg">
      <h3 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-red-500 text-center mb-6">
        Purchase Here
      </h3>
      <form onSubmit={handlePurchase}>
        {/* from name and quantity row */}
        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Service Id</span>

            <input
              disabled
              type="text"
              className="input input-bordered w-full"
              name="serviceId"
              defaultValue={_id}
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <span className="label-text">Service Name</span>
            <input
              disabled
              className="input input-bordered w-full"
              name="serviceName"
              defaultValue={serviceName}
              id=""
            />
          </div>
        </div>
        {/* from supplier row */}
        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Service Image</span>

            <input
              disabled
              type="text"
              className="input input-bordered w-full"
              name="serviceImage"
              defaultValue={imgURL}
              id=""
            />
          </div>
          <div className=" md:w-1/2">
            <span className="label-text">Provider Email</span>

            <input
              disabled
              type="email"
              className="input input-bordered w-full"
              name="providerEmail"
              defaultValue={providerEmail}
              id=""
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Provider Name</span>

            <input
              disabled
              type="text"
              placeholder="Provider Name"
              className="input input-bordered w-full"
              name="providerName"
              defaultValue={providerName}
              id=""
            />
          </div>
          <div className=" md:w-1/2">
            <span className="label-text">User Email</span>
            <input
              disabled
              type="text"
              placeholder="Provider Email"
              className="input input-bordered w-full"
              name="userEmail"
              defaultValue={userEmail}
              id=""
            />
          </div>
        </div>
        {/* from category and details row */}

        {/* from photo url row */}

        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">User Name</span>

            <input
              type="text"
              disabled
              className="input input-bordered w-full"
              name="username"
              defaultValue={username}
              id=""
            />
          </div>
          <div className=" md:w-1/2">
            <span className="label-text">Service Date</span>
            <input
              type="date"
              className="input input-bordered w-full"
              name="serviceDate"
              id=""
            />
          </div>
        </div>

        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Special instruction</span>

            <input
              type="text"
              placeholder="Instruction"
              className="input input-bordered w-full"
              name="servicePlan"
              id=""
            />
          </div>
          <div className=" md:w-1/2">
            <span className="label-text">Service Price</span>
            <input
              type="text"
              disabled
              placeholder="Provider Email"
              className="input input-bordered w-full"
              name="price"
              defaultValue={price}
              id=""
            />
          </div>
        </div>

        <input
          type="submit"
          value="Purchase"
          className="btn btn-block bg-green-500"
        />
      </form>
    </div>
  );
};

export default ForPurchase;
