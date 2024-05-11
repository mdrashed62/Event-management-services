import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { id } = useParams();
  const services = serviceDetails.find((service) => service._id === id);
  document.title = "Service Details | Epic Eventistry ";
  const {
    _id,
    price,
    imgURL,
    serviceName,
    providerImage,
    providerName,
    description,
    providerEmail,
    serviceArea,
  } = services;

  return (
    <div>
      <div className="flex flex-col px-4 mb-6 lg:px-10">
        <div className="flex-1 flex justify-center">
          <img className="lg:w-[600px] rounded-lg" src={imgURL} alt="" />
        </div>
        <div className="flex-1">
          <div className="border-b-2 text-center lg:text-start">
            <div className="flex items-center gap-6">
              <h3 className="text-3xl mt-6 font-semibold">{serviceName}</h3>
              {/* <h3 className="text-4xl font-semibold">{countryName}</h3> */}
            </div>
            <p className=" mt-2 mb-2 font-semibold">{description}</p>
            <div className="flex gap-8 lg:gap-20 border-t-2">
            <p className="font-semibold text-2xl">Location: {serviceArea}</p>
            <p className="font-semibold text-2xl">Service Price: {price}</p>
            </div>
            
          </div>
          <div className="flex border-b-2 items-center">
            <div className=" mt-2  text-center font-semibold lg:text-start">
              <h1 className="text-2xl  font-bold">Provider Info:</h1>
              <div>
                <p className="mb-2 text-xl">Name: {providerName}</p>
                
                <div className="avatar">
                  <div className="w-32 rounded">
                    <img src={providerImage} />
                  </div>
                </div>
                <p className="mb-2 text-xl">Email: {providerEmail}</p>
              </div>
            </div>
           
          </div>
        </div>
        <div  className="w-full">
        <Link to={`/forPurchase/${_id}`}><button className="btn w-full mt-2 bg-emerald-500">Book Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
