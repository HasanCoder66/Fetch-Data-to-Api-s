import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function HomePage() {
  const [mainData, setMainData] = useState([]);

  const dataHandling = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setMainData(data); // Store the entire array
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataHandling();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {mainData.map((item) => (
        <Card
          key={item.id}
          style={{
            width: "18rem",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Card.Img variant="top" src={item.image} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{item.category}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
              <Card.Link href="#">View Details</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default HomePage;
