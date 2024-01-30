// 8. List Products
import { Card } from "react-bootstrap";
// 9. Implement React Router
import { Link } from "react-router-dom";
// 10. Rating Component
import Rating from "./Rating";

export default function Product({ product }) {
  return (
    // my-3 (margin y axis 3) / p-3 (padding all sides 3)
    <Card className="my-3 p-3 rounded height">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" /*positioning to tp*/ />
      </Link>

      <Card.Body className="card-body">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <div>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text
            as="h3" /*presenting it as a h3, you can present it as any element that you want with as keyword*/
          >
            {product.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
