import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Cards = ({ climaLugar }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{climaLugar?.name}</Card.Title>
        <Card.Title>{Math.round(climaLugar?.main?.temp)}°C</Card.Title>
        <Card.Subtitle>{climaLugar?.weather?.main}</Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Minima: {Math.round(climaLugar?.main?.temp_min)}°C
        </ListGroup.Item>
        <ListGroup.Item>
          Maxima: {Math.round(climaLugar?.main?.temp_max)}°C
        </ListGroup.Item>

        <ListGroup.Item>Humedad: {climaLugar?.main?.humidity}%</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Cards;
