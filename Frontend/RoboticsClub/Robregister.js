import {useState, Component} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap"
import { Row, Col, Container, Button } from "react-bootstrap"
import Robheader from './robheader';
import Footer from '../../footer';
 
  function RobRegister() {

    const containerStyle = {
        margin: '50px',
        padding: '50px'
    }
    const buttn = {
      color: 'white',
      backgroundColor: 'rgb(5, 66, 127)',
      border: 'rgba(238, 227, 227, 0.5)',
      padding:'10px',
      fontSize: '20px',
      margin:'10px',
      width:'15%',
      textAlign: 'center',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  }
    
    const [studentid, setStudentid] = useState();
    const [name, setName] = useState();
    const [stream, setStream] = useState();
    const [dept, setDept] = useState();
    const [year, setYear] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [status, setStatus] = useState(false);

    function registerStudentApiFunction(e) {
        e.preventDefault();
        let postData = {
            studentid, name, stream, dept, year, email, password
        }

        console.log("Function called", postData);
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post(`http://localhost:8080/robstudents`, postData)
     .then(res => {
       console.log(res.data);
         setStatus(true);
         
     })
    }
    return (
        <div >
         <Robheader/>
        <Container style={containerStyle}>
        
            <Row>
            
                <Col>
                    <div >
                    {
      status && <Alert  variant="success">
        <Alert.Heading >Registration Successfull</Alert.Heading>
        
      </Alert>}
        <h3 class="head-reg">Register to become a member of the club</h3>
        <form class="form-reg" onSubmit={registerStudentApiFunction}>
        <p></p>
        <input type="text" placeholder="Enter ID" value={studentid} onChange={(e)=>setStudentid(e.target.value)}/>
        <br></br>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br></br>
        <input type="text" placeholder="Enter Stream" value={stream} onChange={(e)=>setStream(e.target.value)}/>
        <br></br>
        <input type="text" placeholder="Enter Department" value={dept} onChange={(e)=>setDept(e.target.value)}/>
        <br></br>
        <input type="text" placeholder="Enter year" value={year} onChange={(e)=>setYear(e.target.value)}/>
        <br></br>
        <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <input type="password" placeholder="Set password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <br></br>
                            <Button type="" style={buttn}>Register</Button>
                        </form>
                    </div>
                    {status && <div className="App" > <Link  to="/Robotics" style={buttn}>Go Back</Link> </div>}
                </Col>
            </Row></Container>
        <Footer/>
        
    </div>
    );
  }
  
  export default RobRegister;