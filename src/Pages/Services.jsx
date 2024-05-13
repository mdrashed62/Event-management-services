import axios from "axios";
import { useEffect, useState } from "react";
import AllServices from "./AllServices";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  document.title = "All Services | Epic Eventistry ";

  useEffect(() => {
    const getServicesData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/services");
        console.log("Response data:", response.data);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };
    getServicesData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
  };


  const filteredServices = services.filter((service) =>
    service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-10">
      <form onSubmit={handleSearch} className="mb-6 w-1/2 mx-auto">
        <div>
          <input
            className="bg-gray-300 px-4 cursor py-2 w-[80%] rounded-md"
            placeholder="Search"
            type="text"
            name="search"
          />
          <button className="px-4 py-2 ml-4 bg-[#008DDA] rounded-md">
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 gap-3">
        {filteredServices.map((service) => (
          <AllServices key={service._id} service={service}></AllServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
