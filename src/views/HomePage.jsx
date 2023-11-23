import { Container } from "react-bootstrap";
import logocake from '../imgs/logocake.png'

const HomePage = () => {
  return (
    <Container className="text-center">
      
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6> El lugar de los pasteles felices !! </h6>
      <div><img src={logocake} width="80" height="80" /></div>

    </Container>
  );
};
export default HomePage;
