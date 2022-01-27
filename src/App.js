import logo from './logo.svg';
import React, {useContext, useState, lazy, Suspense } from 'react';
import './App.css';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import axios from 'axios';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
import Cart from './Cart';

import Data from './data';
// import Detail from './Detail';
let Detail = lazy(()=> import('./Detail') );

export let 재고context = React.createContext();


function App() {

  let [향수, 향수변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);
  // let [cart, cart변경] = useState([{id: 0, name : 'Nomade Eau de Parfum', quan : 0}]);

  return (
    <div className="App">

  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">Silver Star Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link href="/detail">Detail</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
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


    <Switch>

      <Route exact path="/">
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


          <재고context.Provider value={재고}>

          <div className="row">
            {
              향수.map((a,i)=>{
                return (<Card 향수={향수[i]} i={i} key={i} />)
              })
            }
          </div>

          </재고context.Provider>



          <button className="btn btn-primary" onClick={()=>{

            

            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              console.log('성공')
              향수변경( [...향수, ...result.data ] );

            })
            .catch(()=>{
              console.log('실패')
            })

          }}>더보기</button>
        </div>
        
      </Route>


      <Route path="/detail/:id">
        {/* <재고context.Provider value={재고}> */}
        <Suspense fallback={<div>로딩중이예요</div>}>
          <Detail 향수={향수} 재고={재고} 재고변경={재고변경}/>
        </Suspense>
        {/* </재고context.Provider> */}
      </Route>

      {/* <Route path="compo" component={ Card } ></Route> */}

      <Route path="/cart">
        <Cart></Cart>
      </Route>

      <Route path="/:id">
        <div>아무거나 적었을때 이거 보여주셈</div>

      </Route>

    </Switch>


    </div>
  );
}


function Card(props){

  let 재고 = useContext(재고context);
  let history = useHistory();
  return(
    <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.향수.id)}}>
      <img 
        src={ props.향수.img + (props.i + 1)}
        width="100%" height="400px"/>
      <h4>{ props.향수.title }</h4>
      <p>{ props.향수.content} & { props.향수.price}</p>
      <Test></Test>
    </div>

  )
}

function Test(){
  let 재고 = useContext(재고context);
  return <p>재고 : {재고[0]}</p>
}

export default App;
