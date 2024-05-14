import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateServices = () => {
  const services = useLoaderData();
  document.title = "Update Services | Epic Eventistry ";
  // console.log(services);

  const {
    _id,
    price,
    imgURL,
    serviceName,
    providerImage,
    providerName,
    description,
  } = services;

  const shortDescText = description
    ? description.slice(0, 200)
    : "Description not available";

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;

    const serviceName = form.serviceName.value;
    const description = form.description.value;
    const imgURL = form.serviceImage.value;
    const price = form.price.value;
    const providerImage = form.providerImage.value;
    const providerName = form.providerName.value;

    const addServices = {
      providerImage,
      providerName,
      serviceName,
      description,
      price,
      imgURL,
    };

    fetch(`https://simple-services-server.vercel.app/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addServices),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Service Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="card shrink-0 w-1/2 mx-auto shadow-2xl bg-base-100 border border-gray-300 mb-10">
      <form onSubmit={handleUpdateService} className="card-body">
        <div className="flex justify-between">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                placeholder="email"
                name="serviceName"
                defaultValue={serviceName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Info</span>
              </label>
              <input
                defaultValue={shortDescText}
                name="description"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Price</span>
              </label>
              <input
                defaultValue={price}
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Provider Name</span>
              </label>
              <input
                defaultValue={providerName}
                name="providerName"
                className="input input-bordered"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Provider Image</span>
          </label>
          <input
            defaultValue={providerImage}
            name="providerImage"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Image</span>
          </label>
          <input
            defaultValue={imgURL}
            name="serviceImage"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control w-full mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateServices;
