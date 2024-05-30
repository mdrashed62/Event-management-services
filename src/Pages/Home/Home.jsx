
import ServiceCards from "../../Components/ServiceCards";
import Banner from "./Banner";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";
import ExtraSection3 from "./ExtraSection3";
import ExtraSection4 from "./ExtraSection4";


const Home = () => {
    document.title = " Home | Epic Eventistry ";
   
    return (
        <div>
            <Banner></Banner>
            <ServiceCards></ServiceCards>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
            <ExtraSection3></ExtraSection3>
            <ExtraSection4></ExtraSection4>
        </div>
    );
};

export default Home;