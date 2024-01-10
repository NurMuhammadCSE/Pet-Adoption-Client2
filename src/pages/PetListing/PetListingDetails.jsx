import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const PetListingDetails = () => {
  const petData = useLoaderData();

  const { user } = useContext(AuthContext);

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
      <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
        <div className="modal-box min-h-screen">
          <form>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What is your Name?</span>
              </div>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Type here"
                className="input input-bordered w-full "
                readOnly
              />
            </label>
            <label className="form-control w-full my-4">
              <div className="label">
                <span className="label-text">What is your Email?</span>
              </div>
              <input
                type="email"
                placeholder="Type here"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What is your Phone Number?</span>
              </div>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full my-4">
              <div className="label">
                <span className="label-text">What is your Address?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
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
            <button
              className="btn btn-primary mt-4"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Adopt Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetListingDetails;
