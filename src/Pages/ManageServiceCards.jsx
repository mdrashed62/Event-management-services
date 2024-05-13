

import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageServiceCards = ({service}) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const {
        _id,
        price,
        imgURL,
        serviceName,
        providerImage,
        providerName,
        description,
      } = service;

      const handleDelete = () => {
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
                    text: "Your Service has been deleted.",
                    icon: "success",
                  });
                 setIsDeleted(true)
                }
              });
          }
        });
      };
    
      const shortDescText = description
        ? description.slice(0, 100)
        : "Description not available";

        if (isDeleted) {
            return null;
          }
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

        <div className="flex justify-between mt-4 w-full">
           <div className="w-[45%]">
           <Link to={`/updateServices/${_id}`}><button className="btn w-full bg-[#AA14F0]">Edit</button></Link>
           </div>
            <div className="w-[45%]">
            <button onClick={() => handleDelete(_id)} className="btn w-full bg-red-500">Delete</button>
            </div>
        </div>

       
      </div>
    </div>
    );
};

export default ManageServiceCards;