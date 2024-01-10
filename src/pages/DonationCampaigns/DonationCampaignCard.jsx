import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCampaignCard = ({ campaign }) => {
  const { petName, petPicture, maxDonationAmount, _id } = campaign;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={petPicture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{petName}</h2>
        <p>{maxDonationAmount}</p>
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to={`/donationDetails/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCampaignCard;
