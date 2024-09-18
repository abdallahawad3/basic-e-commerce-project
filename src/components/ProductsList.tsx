import { useEffect, useState } from "react";
import Card from "./Card";
import type { IProduct } from "../interfaces";
import Flitter from "./Flitter";
import type { TCategory } from "../types";

const API_URL = "https://fakestoreapi.com/products";

const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]); // To store filtered data by category
  const [category, setCategory] = useState<TCategory>("categories");

  const handelCategory = (str: TCategory) => {
    setCategory(str);
  };

  useEffect(() => {
    (async () => {
      const req = await fetch(API_URL);
      const res = await req.json();
      setProducts([...res]);
      setFilteredData([...res]);
    })();
  }, []);

  useEffect(() => {
    if (category) {
      if (category == "categories") setFilteredData(products);
      else setFilteredData(products.filter((product) => product.category === category));
    } else {
      setFilteredData(products);
    }
  }, [products, category]);
  return (
    <>
      <Flitter handelCategory={handelCategory} />
      <div className="row container py-3 mx-auto">
        {filteredData.map((product) => (
          <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
