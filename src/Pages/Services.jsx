import axios from "axios";
import { useEffect, useState } from "react";
import AllServices from "./AllServices";


const Services = () => {
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
        <div className="grid grid-cols-1 gap-3">
            {
                services.map(service => <AllServices key={service._id} service={service}></AllServices>)
            }
        </div>
    );
};

export default Services;