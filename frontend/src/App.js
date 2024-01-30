import { Container } from "react-bootstrap";
// 9. Implement React Router
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3" /*py means padding on y axis*/>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}
