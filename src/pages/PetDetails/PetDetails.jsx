/* eslint-disable react/prop-types */
import { useState } from "react";

const PetDetails = ({ pet }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [adoptionForm, setAdoptionForm] = useState({
    userName: "John Doe", // Placeholder, replace with actual user data
    email: "john@example.com", // Placeholder, replace with actual user data
    phoneNumber: "",
    address: "",
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdoptionForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAdoptSubmit = () => {
    // Here, you would typically make a backend API call to save the adoption request
    // For this example, we'll just log the adoption form data to the console
    console.log("Adoption Request Submitted:", adoptionForm);

    // Close the modal after submission
    closeModal();
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">{pet.name} Details</h2>
        {/* Display other pet details here */}
        <img src={pet.imageUrl} alt={pet.name} className="mb-4 rounded-lg" />
        <p>Age: {pet.age}</p>
        <p>Location: {pet.location}</p>
        {/* Add more pet details as needed */}
        <button className="btn btn-primary" onClick={openModal}>
          Adopt
        </button>
      </div>

      {/* Adoption Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Adoption Form</h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold">User Name</label>
                <input
                  type="text"
                  value={adoptionForm.userName}
                  disabled
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold">Email</label>
                <input
                  type="email"
                  value={adoptionForm.email}
                  disabled
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={adoptionForm.phoneNumber}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold">Address</label>
                <textarea
                  name="address"
                  value={adoptionForm.address}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary w-full"
                onClick={handleAdoptSubmit}
              >
                Submit Adoption Request
              </button>
            </form>
            <button
              className="btn btn-outline w-full mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetDetails;
