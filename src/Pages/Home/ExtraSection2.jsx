import award from '../../assets/award.jpg'

const ExtraSection2 = () => {
    return (
        <div className='bg-[#E8F6EF] mb-8 mt-6 p-6 rounded-md'>
            <h1 className="text-2xl lg:text-5xl font-bold text-black text-center mt-4">Our Achievements</h1>
           <div className='w-1/2  mx-auto'>
            <img className='w-full lg:h-[300px] rounded-lg mt-6' src={award} />
           </div>
           <p className='mt-4 text-black'><span className='text-2xl text-white font-bold'>Industry Awards:</span> We are honored to have received prestigious awards such as [Award Name] in <span className='text-xl font-semibold text-red-500'>[2019]</span> for our outstanding contributions to the event management industry. These accolades validate our commitment to innovation, creativity, and client satisfaction.From intimate gatherings to large-scale productions, we have successfully executed a wide range of events across diverse industries. Our portfolio includes [number] of events that have received acclaim for their seamless execution, flawless design, and unforgettable experiences.We believe in giving back to the community and supporting meaningful causes. Our involvement in charity events, fundraisers, and community initiatives has made a positive impact on the lives of many. We are committed to using our platform to create a better world through events <span className='text-red-500 font-bold'>Read more...</span></p>
        </div>
    );
};

export default ExtraSection2;