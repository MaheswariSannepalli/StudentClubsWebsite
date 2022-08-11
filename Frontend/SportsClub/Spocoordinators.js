import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, Component } from "react";
import { Alert } from "react-bootstrap"
import Spoheader from './spoheader';
import Footer from '../../footer';
import { Row, Col, Container, Button } from "react-bootstrap"
import Image from 'react-bootstrap/Image'

function SpoCoordinators() {
  
  
      const [coid, setCoid] = useState();
      const [coname,setConame] = useState();      
      const [codept, setCodept] = useState();
      const [corole, setCorole] = useState();
      const [coemail, setCoemail] = useState();
      const [copassword, setCopassword] = useState();
      const [status, setStatus] = useState(false);
  
      
      function add(e) {
          e.preventDefault();
          let postData = {
              coid, coname, codept, corole, coemail, copassword
          }
  
          console.log("Function called", postData);
          axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
          axios.post(`http://localhost:8080/spoadmins`, postData)
       .then(res => {
         console.log(res.data);
           setStatus(true);
           
       })
      }
  
      const buttn = {
        color: 'white',
        backgroundColor: 'rgb(5, 66, 127)',
        border: 'rgba(238, 227, 227, 0.5)',
        fontSize: '20px',
        padding:"5px",
        width:'5%',
        textAlign: 'center', 
        marginTop:'-7px',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    }
    const lin = {
      margin:'10px',
    }
      
      return (
          
        <div >
        <Spoheader/>
        <Container >
        
            <Row>
  
                <Col>
                    <div >
                    {
            status && <Alert  variant="success">
              <Alert.Heading>new Coordinator Added</Alert.Heading>
              
            </Alert>}
        <h3 class="reg-head">Add new Coordinators</h3>
        <form class="form-reg" onSubmit={add} >
              <p></p>
              <input  type="text" placeholder="Enter ID" value={coid} onChange={(e)=>setCoid(e.target.value)}/>
              <br></br>
              <input type="text" placeholder="Enter name" value={coname} onChange={(e)=>setConame(e.target.value)}/>
              <br></br>
              <input type="text" placeholder="Enter department" value={codept} onChange={(e)=>setCodept(e.target.value)}/>
              <br></br>
              <input type="text" placeholder="Enter Role" value={corole} onChange={(e)=>setCorole(e.target.value)}/>
              <br></br>
              <input type="text" placeholder="Enter email" value={coemail} onChange={(e)=>setCoemail(e.target.value)}/>
              <br></br>
              <input type="text" placeholder="Enter password" value={copassword} onChange={(e)=>setCopassword(e.target.value)}/>
              <br></br>
              <Button type="" style={buttn}>ADD</Button>
              <Link  to="/Sports/Admin/ViewCoordinators" style={lin} >View Coordinators</Link>
              </form>
        {status } <br></br>
  
        
                    </div>
                    
                </Col>
            </Row></Container>
        <Footer/>
    </div>
      )
          
  }
  
  export default SpoCoordinators;