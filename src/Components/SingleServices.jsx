import { Link } from "react-router-dom";

const SingleServices = ({ service }) => {
  const {
    _id,
    price,
    imgURL,
    serviceName,
    providerImage,
    providerName,
    description,
  } = service;

  const shortDescText = description
    ? description.slice(0, 100)
    : "Description not available";

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={imgURL} className="rounded-xl h-80 w-96" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="flex justify-between gap-10">
        <h2 className="card-title">{serviceName}</h2>
        <h2 className="card-title">{price}</h2>
        </div>
        <p>{shortDescText}</p>
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={providerImage}/>
            </div>
          </div>
          <p className="font-bold">{providerName}</p>
        </div>

        <div className="w-full ">
          <Link to={`/serviceDetails/${_id}`}>
            {" "}
            <button className="btn mt-4 md:20 lg:px-24 bg-green-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
