



const PurchasedServiceCards = ({service}) => {
    // const {user} = useContext(AuthContext)
    console.log(service)

    const {
    
        price,
        imgUrl,
        serviceName,
        providerName,
        servicePlan,
      } = service;
    
     

    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={imgUrl} className="rounded-xl h-80 w-96" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex justify-between gap-10">
          <h2 className="card-title">{serviceName}</h2>
          <h2 className="card-title">{price}</h2>
          </div>
          <p>{servicePlan}</p>
           <div className="flex justify-between w-full">
            <p>Provider Name: </p>
            <p className="font-bold">{providerName}</p>
           
          </div>
  
        </div>
      </div>
    );
};

export default PurchasedServiceCards;