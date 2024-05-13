import axios from "axios";
import { useEffect, useState } from "react";
import ServiceToDoCards from "./ServiceToDoCards";


const ServiceToDo = () => {

    const [services, setServices] = useState([]);
    document.title = "Service To Do | Epic Eventistry ";
  
    useEffect(() => {
        const getServicesData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/purchaseServices');
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
        {services.length === 0 ? (
            <p className="text-4xl font-semibold text-center">Purchase Services Unavailable</p>
        ) : (
            services.map(service => (
                <ServiceToDoCards key={service._id} service={service}/>
            ))
        )}
       </div>
    );
};

export default ServiceToDo;

