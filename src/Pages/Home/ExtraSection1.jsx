const ExtraSection1 = () => {
  return (
    <div className="p-6 bg-[#AD88C6] rounded-md">
      <h1 className="text-5xl text-center font-semibold mb-8  text-[#006769]">
        Upcoming Event
      </h1>
      <div>
        <p className="text-2xl font-bold text-black">Summer Music Festival</p>
        <p className="font-semibold mb-4 text-black">
          Saturday, June 15th, 2024, 10:00 AM - 6:00 PM.
        </p>
        <p className="mb-4 text-black">
          <span className="text-2xl font-semibold text-black">Location:</span> City Park Amphitheater, 123
          Main Street, Anytown, USA
        </p>
        <p className="text-black">
          <span className="text-2xl font-bold text-black">More Information:</span> Get ready to let loose and celebrate in style at our
          electrifying Party Event! Whether you re marking a milestone birthday,
          hosting a festive holiday gathering, or throwing a lively soirée just
          because, our event is the ultimate destination for fun, music, and
          unforgettable memories. Step into a vibrant atmosphere pulsating with
          energy and excitement as we create an immersive for experience that will
          leave you and your guests wanting more. From themed décor and dazzling
          lighting to dynamic entertainment and top-notch catering, our Party
          Event promises to elevate your celebrations to new heights
        </p>
      </div>
      <div className="lg:w-[300px] mx-auto mt-4">
        <button className="btn w-full text-white bg-red-600">Register</button>
      </div>
    </div>
  );
};

export default ExtraSection1;
