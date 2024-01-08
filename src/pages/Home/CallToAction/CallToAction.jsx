const CallToAction = () => {
    return (
      <div className="py-16 bg-gradient-to-b from-base-100 to-base-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Give a Home, Adopt a Pet!</h2>
          <p className="text-lg text-white mb-8">
            Experience the joy of companionship by providing a loving home to a furry friend in need.
            Adopt a pet today and make a difference in their lives.
          </p>
          <img
            src="https://placekitten.com/800/400" // Replace with an actual inspirational image
            alt="Adopt a Pet"
            className="rounded-lg shadow-lg mb-8"
          />
          <p className="text-lg mb-8">
            Your decision to adopt not only changes the life of a pet but also brings endless joy and
            happiness into your own life. Join us in making a positive impact today!
          </p>
          <a href="/adopt" className="btn btn-primary">
            Explore Adoption
          </a>
        </div>
      </div>
    );
  };
  
  export default CallToAction;
  