
import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageServiceCards = ({service}) => {
    const [services, setServices] = useState()
    const {
        _id,
        price,
        imgURL,
        serviceName,
        providerImage,
        providerName,
        description,
      } = service;

      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/services/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Spot has been deleted.",
                    icon: "success",
                  });
                  const remaining = services.filter(service => service._id !== id)
                  setServices(remaining)
                }
              });
          }
        });
      };
    
      const shortDescText = description
        ? description.slice(0, 100)
        : "Description not available";
    console.log(service)
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

        <div className="flex  justify-between mt-4 w-full">
            <button className="btn w-[45%] bg-sky-500">Update</button>
            <button onClick={() => handleDelete(_id)} className="btn bg-red-500 w-[45%]">Delete</button>
        </div>

        {/* <div className="w-full ">
          <Link to={`/serviceDetails/${_id}`}>
            {" "}
            <button className="btn mt-4 md:20 lg:px-24 bg-green-500">
              View Details
            </button>
          </Link>
        </div> */}
      </div>
    </div>
    );
};
ManageServiceCards.propTypes = {
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
export default ManageServiceCards;