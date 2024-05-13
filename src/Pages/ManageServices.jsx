import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ManageServiceCards from "./ManageServiceCards";
import { AuthContext } from "../Providers/AuthProvider";


const ManageServices = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    const { user } = useContext(AuthContext);
    console.log(user)
    
    //const spots = listData?.filter((spot) => spot.userEmail === user?.email);

    document.title = "Manage Service | Epic Eventistry ";

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

      const myServices = services?.filter(service => service.userEmail === user?.email)

    return (
        <div className="grid grid-cols-1 mb-4 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                myServices.map(service => <ManageServiceCards key={service._id} service={service}></ManageServiceCards>)
            }
        </div>
    );
};

export default ManageServices;