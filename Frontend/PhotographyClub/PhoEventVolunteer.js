import {useState, Component} from "react";
import axios from 'axios';
import { Alert } from "react-bootstrap";
import {
  Link,
  Navigate,
} from "react-router-dom";
import Phoheader from './phoheader';
import Footer from '../../footer';
import { Row, Col, Container, Button } from "react-bootstrap"
import {useLocation} from 'react-router-dom';

 
  function PhoeventVolunteer() {
    const [studentid, setStudentid] = useState();
    const [password, setPassword] = useState();
    const [status, setStatus] = useState(false);
    const location = useLocation()
    const { eventname } = location.state
    let event = eventname;

    const buttn = {
      color: 'white',
      backgroundColor: 'rgb(5, 66, 127)',
      border: 'rgba(238, 227, 227, 0.5)',
      padding:'7px',
      fontSize: '20px',
      margin:'10px',
      width:'15%',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  }
  const back = {
         marginLeft:"600px"
  }

    function loginStudentApiFunction(e) {
        e.preventDefault();
       
        console.log("Function called", studentid);
        axios.get(`http://localhost:8080/phostudent/${studentid}`)
          .then(res => {
            console.log(res.data);
            if (password === res.data.password) {
              setStatus(true);

              var name= res.data.name;
              var stream= res.data.stream;
              var dept= res.data.dept;
              var year= res.data.year;
              var email= res.data.email;
              
              let postData = { studentid,event,name,stream,dept,year,email};
              <Alert.Heading>Volunteer Registration Successful</Alert.Heading>

              axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
              axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
              axios.post(`http://localhost:8080/phovolunteers`, postData)
             .then(res => {
                          console.log(res.data);
                           setStatus(true);
                         })

            }
            else{
                alert("Incorrect password or ID")
            }
          })
        
        
      }
    return (
        <div >
          <Phoheader/>
            <Container >
                <Row>
                    <Col>
                        <div >
                        {
          status && <Alert  variant="success">
            <Alert.Heading>Volunteer Registration Successful</Alert.Heading>
          </Alert>}
            <h3 class="reg-head">Confirm Your ID and Password to volunteer the event</h3>
            <form class="form-reg" onSubmit={loginStudentApiFunction}>
    
        <input  type="text" class="input-label" placeholder="Enter ID" value={studentid} onChange={(e) => setStudentid(e.target.value)}/>
      <br></br>
        <input  type="password" class="input-label" placeholder="Enter password" value={password} onChange={ (e) =>setPassword(e.target.value)}/>
      <br></br>
      <Button type="" style={buttn}>VERIFY</Button>
      
      </form>
      {status}
      <Link  to="/Photography" style={back}>GO BACK</Link>
            
                        </div>
                        
                    </Col>
                </Row></Container>
            <Footer/>
        </div>
    );
  }
  
  export default PhoeventVolunteer;