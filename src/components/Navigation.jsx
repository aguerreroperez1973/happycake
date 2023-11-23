import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logohome from '../imgs/logohome.png';
import logonotes from '../imgs/logonotes.png'
import logopiececake from '../imgs/logopiececake.png'

const Navigation = () => {
  return (
    <Navbar className="nav-bar bg-danger" variant="dark">
      <Container className="justify-content-start">
        <div style={{display:'flex', flexGrow:'1', justifyContent:'space-between'}}>
          <div>
            <Link to="/" className="text-white ms-3 text-decoration-none" > <img src={logohome} width="20" height="20" /> Home  </Link>
            <Link to="/contacto" className="text-white ms-3 text-decoration-none" > <img src={logonotes} width="20" height="20" /> Contacto </Link>
          </div>
          <div>
            <Link to="/" className="text-white ms-3 text-decoration-none" > Happy Cake <img src={logopiececake} width="20" height="20" /> </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navigation;
