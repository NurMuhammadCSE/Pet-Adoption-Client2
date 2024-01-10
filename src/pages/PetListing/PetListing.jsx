import { useState, useEffect } from "react";
import PetListingCard from "./PetListingCard";

const PetListing = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/animals")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="hero min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-1">
        {animals.map((pet) => (
          <PetListingCard key={pet._id} pet={pet}></PetListingCard>
        ))}
      </div>
    </div>
  );
};

export default PetListing;
