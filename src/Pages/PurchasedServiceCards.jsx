
// eslint-disable-next-line react/prop-types
const PurchasedServiceCards = ({service}) => {
    console.log(service)
   
    // eslint-disable-next-line react/prop-types
    const { username} = service;

    return (
        <div>
            <h1>User Name:{username}</h1>
        </div>
    );
};

export default PurchasedServiceCards;