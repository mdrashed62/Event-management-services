import axios from "axios";
import { useEffect, useState } from "react";
import PurchasedServiceCards from "./PurchasedServiceCards";


const PurchasedServices = () => {
    const [services, setServices] = useState([]);
    document.title = "Booked Services | Epic Eventistry ";
  
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
            <p>No purchased services available.</p>
        ) : (
            services.map(service => <PurchasedServiceCards key={service._id} service={service}></PurchasedServiceCards>)
        )}
    </div>
    );
};

export default PurchasedServices;