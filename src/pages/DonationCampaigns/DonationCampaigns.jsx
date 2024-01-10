import { useEffect } from "react";
import { useState } from "react";
import DonationCampaignCard from "./DonationCampaignCard";

const DonationCampaigns = () => {
  const [allCampaign, setAllCampaign] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/donationCampaigns")
      .then((res) => res.json())
      .then((data) => {
        setAllCampaign(data);
      });
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 justify-center">
        {allCampaign.map((campaign) => (
          <DonationCampaignCard
            key={campaign._id}
            campaign={campaign}
          ></DonationCampaignCard>
        ))}
      </div>
    </div>
  );
};

export default DonationCampaigns;
