import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  document.title = "Add Service | ";

  const handleAddServices = (e) => {
    e.preventDefault();
    const form = e.target;

    const serviceName = form.serviceName.value;
    const description = form.description.value;
    const serviceArea = form.serviceArea.value;
    const price = form.price.value;
    const providerPhoto = form.providerPhoto.value;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const userEmail = user?.email;
    const userPhoto = user?.photoURL;
    const userName = user?.displayName;

    const addServices = {
      providerPhoto,
      providerName,
      providerEmail,
      serviceName,
      description,
      serviceArea,
      price,
      userEmail,
      userPhoto,
      userName,
    };

    console.log(addServices);

    //send data to the server

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addServices),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Service has been added",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    form.reset();
  };

  return (
    <div className=" mb-4  bg-gray-300 mt-6 p-20 rounded-lg">
      <h3 className="text-4xl font-bold text-center mb-6">Add Services</h3>
      <form onSubmit={handleAddServices}>
        {/* from name and quantity row */}
        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Service Name</span>

            <input
              type="text"
              placeholder="Service Name"
              className="input input-bordered w-full"
              name="serviceName"
              // defaultValue={spotName}
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <span className="label-text">Price</span>
            <input
              placeholder="Service Price"
              className="input input-bordered w-full"
              name="price"
              // defaultValue={}
              id=""
            />
          </div>
        </div>
        {/* from supplier row */}
        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Description</span>

            <input
              type="text"
              placeholder="Description"
              className="input input-bordered w-full"
              name="description"
              // defaultValue={}
              id=""
            />
          </div>
          <div className=" md:w-1/2">
            <span className="label-text">Service Area</span>

            <input
              type="text"
              placeholder="Service Area"
              className="input input-bordered w-full"
              name="serviceArea"
              // defaultValue={}
              id=""
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Provider Name</span>

            <input
              type="text"
              placeholder="Provider Name"
              className="input input-bordered w-full"
              name="providerName"
              // defaultValue={}
              id=""
            />
          </div>
          <div className=" md:w-1/2">
            <span className="label-text">Provider Email</span>
            <input
              type="text"
              placeholder="Provider Email"
              className="input input-bordered w-full"
              name="providerEmail"
              // defaultValue={}
              id=""
            />
          </div>
        </div>
        {/* from category and details row */}

        {/* from photo url row */}

        <div className=" mb-4">
          <div className=" w-full">
            <span className="label-text">Service Image</span>

            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered w-full"
              name="photo"
              // defaultValue={}
              id=""
            />
          </div>
        </div>
        <div className=" mb-4">
          <div className=" w-full">
            <span className="label-text">Provider Photo</span>

            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered w-full"
              name="providerPhoto"
              // defaultValue={}
              id=""
            />
          </div>
        </div>

        <input
          type="submit"
          value="Add Services"
          className="btn btn-block bg-green-500"
        />
      </form>
    </div>
  );
};

export default AddServices;
