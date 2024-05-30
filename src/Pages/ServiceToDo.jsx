import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ServiceToDoCards from "./ServiceToDoCards";
import { AuthContext } from "../Providers/AuthProvider";

const ServiceToDo = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  document.title = "Service To Do | Epic Eventistry ";

  useEffect(() => {
    const getServicesData = async () => {
      try {
        const response = await axios.get(
          "https://simple-services-server.vercel.app"
        );
        // console.log("Response data:", response.data);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };
    getServicesData();
  }, []);

  const myServices = services?.filter(
    (service) => service.userEmail === user?.email
  );

  return (
    <div>
      {myServices.length === 0 ? (
        <p className="text-4xl font-semibold text-center">
          No purchased services available.
        </p>
      ) : (
        myServices.map((service) => (
          <ServiceToDoCards key={service._id} service={service} />
        ))
      )}
    </div>
  );
};

export default ServiceToDo;
