import { useContext } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const PetListingDetails = () => {
  const petData = useLoaderData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

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
        <div className="modal-box min-h-screen">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What is your Name?</span>
              </div>
              <input
                type="text"
                {...register("name", { required: true })}
                defaultValue={user?.displayName}
                placeholder="Type here"
                className="input input-bordered w-full "
                readOnly
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </label>
            <label className="form-control w-full my-4">
              <div className="label">
                <span className="label-text">What is your Email?</span>
              </div>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Type here"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">What is your Phone Number?</span>
              </div>
              <input
                type="number"
                {...register("phone", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              {errors.phone && (
                <span className="text-red-600">Phone Number is required</span>
              )}
            </label>
            <label className="form-control w-full my-4">
              <div className="label">
                <span className="label-text">What is your Address?</span>
              </div>
              <input
                type="text"
                {...register("address", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              {errors.address && (
                <span className="text-red-600">Address is required</span>
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
