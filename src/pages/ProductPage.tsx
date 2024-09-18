import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IProduct } from "../interfaces";
import Card from "../components/Card";

const ProductPage = () => {
  const { id } = useParams();
  const API_URL = "https://fakestoreapi.com/products/";
  const [product, setProduct] = useState<IProduct>({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    title: "",
  });
  useEffect(() => {
    (async () => {
      const request = await fetch(`${API_URL}${id}`);
      const response = await request.json();
      setProduct(response);
    })();
  }, []);
  return (
    <div className="my-5">
      <div className="container col-4 ">
        <Card product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
