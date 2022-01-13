import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Data from './data';

function App() {

  let [향수, 향수변경] = useState(Data);

  return (
    <div className="App">

  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Silver Star Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Link
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <div className="jumbotron">
  <h1>20% Season Off</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</div>

<div className="container">
  <div className="row">
    {
      향수.map((a,i)=>{
        return <Card 향수={향수[i]} i={i} key={i}/>
      })
    }

  </div>
</div>

    </div>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img 
        src={ props.향수.img }
        width="100%" height="50%"/>
      <h4>{ props.향수.title }</h4>
      <p>{ props.향수.content} & { props.향수.price}</p>
    </div>

    
  );
}

export default App;
