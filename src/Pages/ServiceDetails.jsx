import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { id } = useParams();
  const services = serviceDetails.find((service) => service._id === id);

  const {
    _id,
    price,
    imgURL,
    serviceName,
    providerImage,
    providerName,
    description,
  } = services;

  return (
    <div>
      <div className="flex flex-col px-4 mb-6 lg:px-10">
        <div className="flex-1 flex justify-center">
          <img className="w-[800px] rounded-lg" src={imgURL} alt="" />
        </div>
        <div className="flex-1">
          <div className="border-b-2 text-center lg:text-start">
            <div className="flex items-center gap-6">
              <h3 className="text-3xl mt-6 font-semibold">{serviceName}</h3>
              {/* <h3 className="text-4xl font-semibold">{countryName}</h3> */}
            </div>
            <p className="text-xl mt-2 mb-4 font-semibold">{description}</p>
          </div>
          <div className="border-b-2 mt-2 text-center font-semibold lg:text-start">
            <h1 className="text-2xl font-bold">Provider Info:</h1>
            <div>
              <div className="avatar">
                <div className="w-32 rounded">
                  <img src={providerImage}/>
                </div>
              </div>
              <p className="mb-2">{providerName}</p>
            </div>
          </div>

          <p className="flex items-center gap-4">
            <span className="text-xl font-semibold text-center lg:text-start">
              Visitors Per Year: <p className="mb-2">{price}</p>
            </span>
            {/* <p>{visitors}</p> */}
          </p>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
