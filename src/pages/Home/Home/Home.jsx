import AboutUs from "../AboutUs/AboutUs";
import AdoptionProcess from "../AdoptionProcess/AdoptionProcess";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import PetsCategory from "../PetsCategory/PetsCategory";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PetsCategory></PetsCategory>
      <CallToAction></CallToAction>
      <AboutUs></AboutUs>
      <AdoptionProcess></AdoptionProcess>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
