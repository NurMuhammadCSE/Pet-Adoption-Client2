import { useForm } from "react-hook-form";
import { useNavigate, useLoaderData } from "react-router-dom";

const DonationCampaignDetails = () => {
  const DonationCampaignDetails = useLoaderData();
  console.log(DonationCampaignDetails);

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
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/adoptAnimal`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Adopt Animal successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What is your Name?</span>
              </div>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
                readOnly
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </label>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
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
