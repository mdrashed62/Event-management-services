import { useLoaderData, useParams } from "react-router-dom";


const ForPurchase = () => {
    const serviceDetails = useLoaderData();
    const { id } = useParams();
    const services = serviceDetails.find((service) => service._id === id);
  
    const {
      _id,
      serviceImage,
      price,
      imgURL,
      serviceName,
      providerImage,
      providerName,
      description,
      providerEmail,
      serviceArea,
      userEmail,
      userName
    } = services;

    return (
        <div className=" mb-4  bg-gray-300 mt-6 p-20 rounded-lg">
        <h3 className="text-4xl font-bold text-center mb-6">Add Services</h3>
        <form>
          {/* from name and quantity row */}
          <div className="md:flex gap-4 mb-4">
            <div className="md:w-1/2">
              <span className="label-text">Service Id</span>
  
              <input
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
  
          <div className=" mb-4">
            <div className="md:w-1/2">
              <span className="label-text">User Name</span>
  
              <input
                type="text"
                placeholder="Photo Url"
                className="input input-bordered w-full"
                name="userName"
                defaultValue={userName}
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