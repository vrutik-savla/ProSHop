import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>
              ProShop &copy; {currentYear}. Built by Vrutik Savla for learning
              MERN Stack
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
