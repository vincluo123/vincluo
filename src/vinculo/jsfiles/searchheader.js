import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../cssfiles/navheader.css';



function BasicExample() {
  return (

    <Navbar expand="lg" className="bg-body-tertiary navbar-left">
      <Container>
      <Navbar.Brand href="#home">Categories</Navbar.Brand>
        <div className="mobile-flex">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Boys</Nav.Link>
            <Nav.Link href="#link">Girls</Nav.Link>
            <Nav.Link href="#link">Infant</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
        </ div>
        <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      </Container>
    </Navbar>

    
  );
}

export default BasicExample;