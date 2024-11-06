import {Container,Navbar} from 'react-bootstrap';
export const  NavbarComponent = () =>{
  return (
    <Navbar expand="lg" bg='primary' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><strong>Redux Pokemon</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

