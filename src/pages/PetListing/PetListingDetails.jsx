import { useLoaderData } from "react-router-dom";

const PetListingDetails = () => {
  const petData = useLoaderData();

  // Check if petData is not available (null or undefined)
  if (!petData) {
    return (
      <div className="hero min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-ring loading-lg"></span>

      </div>
    );
  }

  const { name, image, category, age, location, longDescription } = petData;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content py-16 lg:flex lg:items-center lg:justify-center">
        <div className="lg:flex lg:space-x-12">
          <img
            src={image}
            className="lg:max-w-md rounded-lg shadow-2xl mb-8 lg:mb-0"
            alt={name}
          />
          <div className="lg:text-left">
            <h1 className="text-5xl font-bold mb-4">{name}</h1>
            <p className="text-lg mb-2">{location}</p>
            <p className="text-lg mb-2">{age} years old</p>
            <p className="text-lg mb-6">{category}</p>
            <p className="text-base">{longDescription}</p>
            <button className="btn btn-primary mt-4">Adopt Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetListingDetails;
