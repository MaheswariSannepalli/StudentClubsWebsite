import {useState, Component} from "react";
import axios from 'axios';
import { Alert } from "react-bootstrap";
import {
  Link,
  Navigate,
} from "react-router-dom";
import Header22 from './header22';
import Footer from '../../footer';
import '../../App.css';
import { Row, Col, Container, Button } from "react-bootstrap"
import { hover } from "@testing-library/user-event/dist/hover";
 
  function LitAdmin() {
    const [coid, setCoid] = useState();
    const [copassword, setCopassword] = useState();
    const [status, setStatus] = useState(false);

    const butt = {
      color: 'white',
      backgroundColor: 'rgb(5, 66, 127)',
      border: 'rgba(238, 227, 227, 0.5)',
      padding:'10px',
      fontSize: '20px',
      margin:'10px',
      width:'15%',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  }

    function loginAdminApiFunction(e) {
        e.preventDefault();
        console.log("Function called", coid);
        axios.get(`http://localhost:8080/litadmin/${coid}`)
          .then(res => {
            console.log(res.data);
            if (copassword === res.data.copassword) {
              setStatus(true);
              
            }
          })
        
        
      }
    return (
        <div >
        <Header22/>
            <Container >
            
                <Row>
          
                    <Col>
                        <div class="form-center">
                        {
          status && <Alert  variant="success">
            <Alert.Heading>Login Successfull</Alert.Heading>
            <Navigate to="/Literary/Admin/ViewCoordinators" />
          </Alert>}
            <h3 class="reg-head">Admin Login</h3>
            <form class="form-reg" onSubmit={loginAdminApiFunction}>
      <p></p>
      
        <input class="input-label" type="text" placeholder="Enter ID" value={coid} onChange={(e) => setCoid(e.target.value)}/>
      <br></br>
        <input  class="input-label" type="password" placeholder="Enter password" value={copassword} onChange={ (e) =>setCopassword(e.target.value)}/>
      <br></br>
      <Button type="" style={butt}>Login</Button>
      </form>
      {status && <Link  to="/Literary/Admin/ViewCoordinators">View Coordinators</Link>}
      
            
                        </div>
                        
                    </Col>
                </Row></Container>
            <Footer/>
        </div>
    );
  }
  
  export default LitAdmin;