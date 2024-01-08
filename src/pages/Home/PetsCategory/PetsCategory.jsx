const PetsCategory = () => {
  const petCategories = [
    { name: "Cats", icon: "🐱" },
    { name: "Dogs", icon: "🐶" },
    { name: "Rabbits", icon: "🐰" },
    { name: "Fish", icon: "🐟" },
    { name: "Birds", icon: "🐦" },
    // Add more categories as needed
  ];

  return (
    <div className="py-12 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Explore Pet Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {petCategories.map((category, index) => (
            <div
              key={index}
              className="card p-6 bg-base-100 rounded-lg shadow-lg"
            >
              <div className="text-2xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-600">
                Find adorable {category.name.toLowerCase()} looking for their
                forever homes.
              </p>
              <a
                href={`/${category.name.toLowerCase()}`}
                className="btn btn-primary mt-4"
              >
                View {category.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetsCategory;
