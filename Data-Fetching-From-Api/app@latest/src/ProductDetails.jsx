import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card
      style={{
        width: "24rem",
        margin: "50px auto",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card.Img variant="top" src={product.image} style={{ height: "300px" }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${product.price}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Category:</strong> {product.category}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ProductDetails;
