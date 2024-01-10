/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Sample data for demonstration
const petsData = [
  {
    id: 1,
    name: "Fluffy",
    age: 2,
    location: "City A",
    category: "Cats",
    imageUrl: "https://placekitten.com/300/200",
  },
  {
    id: 2,
    name: "Buddy",
    age: 3,
    location: "City B",
    category: "Dogs",
    imageUrl: "https://placedog.net/300/200",
  },
  // Add more pet data as needed
];

const PetCard = ({ pet }) => (
  <div className="card p-4 mb-4">
    <img src={pet.imageUrl} alt={pet.name} className="mb-2 rounded-lg" />
    <h3 className="text-lg font-bold">{pet.name}</h3>
    <p>Age: {pet.age}</p>
    <p>Location: {pet.location}</p>
    <button className="btn btn-primary mt-2">
      <Link to={`/details/${pet.id}`}>View Details</Link>
    </button>
  </div>
);

const PetListing = () => {
  const [pets, setPets] = useState(petsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Simulate fetching more pets when scrolling (infinite scrolling)
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // Fetch more pets or update the pet list
        // For demonstration, let's add the same pets again (you should fetch from an API)
        setPets((prevPets) => [...prevPets, ...petsData]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array to run only once on component mount

  const filteredPets = pets
    .filter((pet) => pet.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(
      (pet) => selectedCategory === "All" || pet.category === selectedCategory
    )
    .sort((a, b) => b.id - a.id); // Sort by date in descending order (assuming higher id means newer)

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="All">All Categories</option>
          <option value="Cats">Cats</option>
          <option value="Dogs">Dogs</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetListing;
