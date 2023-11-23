import { Container } from "react-bootstrap";
import Contacto from "../components/Contacto"

const PlansPage = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuentanos, ¿en que te podemos ayudar?</h1>
      <Contacto />
    </Container>
  );
};
export default PlansPage;
