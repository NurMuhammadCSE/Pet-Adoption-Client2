const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 my-12">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.freepik.com/free-vector/girl-with-her-cute-dogs-cartoon-style_1308-88074.jpg?w=740&t=st=1704734671~exp=1704735271~hmac=643ed8075a2cfd833f3950508e1bb235153ce05edbcd37e2b2add2353ea6ba3e"
            className="max-w-lg rounded-lg shadow-2xl"
            alt="Girl with her cute dogs"
          />
          <div>
            <h1 className="text-5xl font-bold">Adopt a Furry Friend Today!</h1>
            <p className="py-6">
              Discover the joy of companionship by adopting a lovable pet. Our
              furry friends are waiting to bring happiness into your life.
              Provide them with a forever home and experience unconditional love
              like never before.
            </p>
            <button className="btn btn-primary">Explore Adoption</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
