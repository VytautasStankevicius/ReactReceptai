import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ReactComponent as Magnifyer} from '../../images/magnifyingGlass.svg'
import {ReactComponent as UserEmpty} from '../../images/userEmpty.svg'


const Header = () => {
  return (
    <Navbar expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand>
          <Logo />Recipedia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navFix" />
        <Navbar.Collapse id="navFix">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="category">Category</Nav.Link>
            <Nav.Link as={Link} to="recipeDisplay">Recipe</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
          </Nav>
          <Nav className="mx-auto justify-content-between">
            <Magnifyer/>
            <UserEmpty/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;