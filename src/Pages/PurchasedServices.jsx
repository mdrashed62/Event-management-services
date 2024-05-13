import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PurchasedServiceCards from "./PurchasedServiceCards";
import { AuthContext } from "../Providers/AuthProvider";


const PurchasedServices = () => {
    const [services, setServices] = useState([]);
    const {user} = useContext(AuthContext)
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

      
      const myServices = services?.filter(service => service.userEmail === user?.email)
    return (
        <div className="grid grid-cols-1 mb-4 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.length === 0 ? (
            <p>No purchased services available.</p>
        ) : (
          myServices.map(service => <PurchasedServiceCards key={service._id} service={service}></PurchasedServiceCards>)
        )}
    </div>
    );
};

export default PurchasedServices;