import ProductsList from "../components/ProductsList";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <>
      <main>
        <Slider />
        <div>
          <ProductsList />
        </div>
      </main>
    </>
  );
};

export default HomePage;
