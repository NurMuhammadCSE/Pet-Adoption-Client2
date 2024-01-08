const AdoptionProcess = () => {
    const steps = [
      "Explore our pet categories and find your ideal companion.",
      "Submit an adoption application for your chosen pet.",
      "Our team will review your application and contact you for an interview.",
      "Meet and greet with your potential new furry friend.",
      "Complete the adoption paperwork and take your pet to their forever home.",
    ];
  
    return (
      <div className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Adoption Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="rounded-full bg-primary text-white font-bold flex items-center justify-center w-10 h-10 mr-4">
                  {index + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AdoptionProcess;
  