import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
        <img src={imgURL} className="rounded-xl h-64 w-72" />
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
SingleServices.propTypes = {
    service: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      imgURL: PropTypes.string.isRequired,
      serviceName: PropTypes.string.isRequired,
      providerImage: PropTypes.string.isRequired,
      providerName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  };
export default SingleServices;
