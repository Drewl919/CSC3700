import logo from './logo.svg';
import './App.css';
import Navs from "./Navs";
import {Col, Row} from "react-bootstrap";
import Home from "./Home";
import Books from "./Books";


function App() {
  return (
    <div className="App">
      <Navs />
        <Row>
          <Col sm={2}> Hey </Col>
          <Col sm={10}>
            <Home />
          </Col>
        </Row>
    </div>
  );
}

export default App;
