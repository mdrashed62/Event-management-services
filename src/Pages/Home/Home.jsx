
import ServiceCards from "../../Components/ServiceCards";
import Banner from "./Banner";


const Home = () => {
    document.title = "Home | Epic Eventistry ";
   
    return (
        <div>
            <Banner></Banner>
            <ServiceCards></ServiceCards>
        </div>
    );
};

export default Home;