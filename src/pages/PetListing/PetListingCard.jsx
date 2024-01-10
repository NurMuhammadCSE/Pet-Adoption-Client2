/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PetListingCard = ({ pet }) => {
  const { name, age, location, image, _id } = pet;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{age}</p>
        <p>{location}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to={`/details/${_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetListingCard;
