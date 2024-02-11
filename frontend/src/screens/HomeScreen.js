// 16. Fetch Products
// import { useEffect, useState } from "react";
// import axios from "axios";
// 8. List Products
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
// import products from "../products";
// 29. Products API Slice & Get Products Endpoint
import { useGetProductsQuery } from "../slices/productsApiSlice";
// 31. Loader & Message Components
import Loader from "../components/Loader";
import Message from "../components/Message";

export default function HomeScreen() {
  /* const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async function () {
      const response = await axios.get("/api/products");
      // console.log(response);
      setProducts(response.data);
    };

    fetchProducts();
  }, []); //This is an array of dependencies where if you put something in here and that value changes, this use effect is going to run okay, but we only want it to run once when the page loads. So we're just going to leave this as an empty array. */

  // 29. Products API Slice & Get Products Endpoint
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product, i) => (
              // Responsive columns (Bootstrap Feature)
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}
