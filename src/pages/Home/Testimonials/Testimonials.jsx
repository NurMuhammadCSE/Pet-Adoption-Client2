const Testimonials = () => {
    const testimonials = [
      {
        name: "John Doe",
        comment: "Adopting from this website was the best decision I've ever made. My new cat is a bundle of joy!",
      },
      {
        name: "Jane Smith",
        comment: "The adoption process was smooth, and the team was incredibly helpful. I'm grateful for my furry friend.",
      },
      // Add more testimonials as needed
    ];
  
    return (
      <div className="py-12 bg-base-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Happy Adopters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 bg-base-100 rounded-lg shadow-lg">
                <p className="text-lg mb-4">{`"${testimonial.comment}"`}</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  