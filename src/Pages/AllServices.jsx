import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllServices = ({service}) => {
    const {
        _id,
        price,
        imgURL,
        serviceName,
        providerImage,
        providerName,
        description,
        serviceArea,
      } = service;

      const shortDescText = description
    ? description.slice(0, 200)
    : "Description not available";

    return (
        <div className="card bg-base-100 shadow-xl">
      <figure className="">
        <img src={imgURL} className="rounded-xl h-full lg:h-4/5 w-full  lg:w-9/12" />
      </figure>
      <div className="card-body items-center text-center">
      <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={providerImage}/>
            </div>
          </div>
          <p className="font-bold">{providerName}</p>
        </div>

        <div>
        <h2 className="card-title text-3xl">{serviceName}</h2>
        </div>
        <p className="lg:w-[500px]">{shortDescText}</p>
        
        <div  className="flex justify-between gap-10">
        <h2 className="card-title">{price}</h2>
        <p  className="font-bold">{serviceArea}</p>
        </div>

        <div className="w-full">
          <Link to={`/serviceDetails/${_id}`}>
            {" "}
            <button className="btn w-1/2 mt-4 md:20 lg:px-24 bg-green-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};
AllServices.propTypes = {
    service: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      imgURL: PropTypes.string.isRequired,
      serviceName: PropTypes.string.isRequired,
      providerImage: PropTypes.string.isRequired,
      providerName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      serviceArea: PropTypes.string.isRequired,
    }).isRequired,
  };
export default AllServices;