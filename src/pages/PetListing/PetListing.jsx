import { useState } from "react";
import { useEffect } from "react";
import PetListingCard from "./PetListingCard";

const PetListing = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/animals`)
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
      });
  }, []);

  return (
    <div>
      {/* <h1>{animals.length}</h1> */}
      <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-1">
        {animals.map((pet) => (
          <PetListingCard key={pet._id} pet={pet}></PetListingCard>
        ))}
      </div>
    </div>
  );
};

export default PetListing;
