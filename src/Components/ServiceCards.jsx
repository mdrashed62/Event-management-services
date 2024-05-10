import axios from "axios";
import { useEffect, useState } from "react";
import SingleServices from "./SingleServices";
import { Link } from "react-router-dom";


const ServiceCards = () => {
    const [services, setServices] = useState([]);
  
    useEffect(() => {
        const getServicesData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/services');
            console.log("Response data:", response.data); 
            setServices(response.data);
          } catch (error) {
            console.error("Error fetching services data:", error);
          }
        };
        getServicesData();
      }, []);

    return (
       <div>
         <div className="grid grid-cols-1 mb-4 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.length > 0 &&
                services?.slice(0, 6)?.map(service => <SingleServices key={service._id} service={service}></SingleServices>)
            }
           
        </div>
        <Link to='/allServices'>
         <div className="mb-10 flex justify-center">
         <button className="btn w-1/2 bg-sky-600">Show All</button>
         </div>
         </Link>
       </div>
    );
};

export default ServiceCards;