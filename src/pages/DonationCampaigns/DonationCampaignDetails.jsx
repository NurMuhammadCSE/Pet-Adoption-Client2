import { useForm } from "react-hook-form";
import { useNavigate, useLoaderData, Link } from "react-router-dom";

const DonationCampaignDetails = () => {
  const DonationCampaignDetails = useLoaderData();

  const {
    petName,
    petPicture,
    maxDonationAmount,
    lastDateOfDonation,
    longDescription,
  } = DonationCampaignDetails;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const donationAmount = parseFloat(data.donate);

    if (isNaN(donationAmount) || donationAmount <= 0) {
      // Handle invalid donation amount (not a number or negative)
      console.error("Invalid donation amount");
      return;
    }


    // reset();
    document.getElementById("my_modal_5").close();

    navigate("/payment", { state: { donationAmount } });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Enter your Donate</span>
              </div>
              <input
                type="number"
                {...register("donate", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              {errors.donate && (
                <span className="text-red-600">Donation is required</span>
              )}
            </label>

            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                <Link to={"/payment"}>Payment</Link>
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <div className="lg:flex lg:space-x-12">
        <img src={petPicture} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="lg:text-left">
          <h1 className="text-5xl font-bold">{petName}</h1>
          <p className="text-lg mb-2">{maxDonationAmount}</p>
          <p className="text-lg mb-2">{lastDateOfDonation}</p>
          <p className="text-lg mb-2">{longDescription}</p>
          <button
            className="btn btn-primary mt-4"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCampaignDetails;
