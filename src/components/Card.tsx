import { Link } from "react-router-dom";
import type { IProduct } from "../interfaces";
import { textSlicer } from "../utils";
interface IProps {
  product: IProduct;
}
const Card = ({ product }: IProps) => {
  return (
    <div className="card mb-2 mb-md-4 p-2 scale-up-center">
      <img src={product.image} className="card-img-top image-card " alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{textSlicer(product.title, 20)}</h5>
        <p className="card-text">{textSlicer(product.description, 50)}</p>
        <div className="mb-2 d-flex flex-column align-items-start justify-content-between">
          <p>
            <span className="text-primary fw-bold">Price:</span> {product.price}
          </p>
          <p>
            <span className="text-primary fw-bold">Category:</span> {product.category}
          </p>
        </div>
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          Show Product
        </Link>
      </div>
    </div>
  );
};

export default Card;
