import axios from "axios";
import { useEffect, useState } from "react";
import ManageServiceCards from "./ManageServiceCards";


const ManageServices = () => {
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
        <div className="grid grid-cols-1 mb-4 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                services.map(service => <ManageServiceCards key={service._id} service={service}></ManageServiceCards>)
            }
        </div>
    );
};

export default ManageServices;