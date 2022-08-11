import { useLocation } from "react-router-dom";
import {useState, Component} from "react";
import { Alert } from "react-bootstrap";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Phoheader from './phoheader';
import Footer from '../../footer';
import axios from 'axios';
import React from "react";
function PhoeditEdit(){
    const location = useLocation()
    const { evname } = location.state
    const { evdate } = location.state
    const { evtime } = location.state
    const { evdesc } = location.state
    console.log("received values",evname);
    const [status, setStatus] = useState(false);
       
        const [name, setName] = useState(evname);  
        const [date,setDate] = useState(evdate);    
        const [time, setTime] = useState(evtime);
        const [description, setDescription] = useState(evdesc);

        function Edit(e) {
            e.preventDefault();
            let editData = {
                name, date, time,description
            }
    
            console.log("Function called", editData);
            axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            axios.put(`http://localhost:8080/phoevent/event/${name}`, editData)
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
        
    return(
        <div >
            <Phoheader/>
                    {
            status && <Alert  variant="success">
              <Alert.Heading>Event Details edited Successfully</Alert.Heading>
              
            </Alert>}
            <h3 class="reg-head">Edit Event</h3>
        <form class="form-reg" >
              <p></p>
              <input type="text" class="input_label" value={name}  onChange={e => setName(e.target.value)}/>
              <br></br>
              <input type="text" class="input_label" value={date} onChange={e => setDate(e.target.value)}/>
              <br></br>
              <input type="text" class="input_label" value={time} onChange={e => setTime(e.target.value)}/>
              <br></br>
              <input type="text" class="input_label" value={description} onChange={e => setDescription(e.target.value)}/>
              <br></br>
              <Button type="" style={buttn} onClick={Edit}>EDIT</Button>
              <Link  to="/Photography/Admin/ViewCoordinators/ViewEvents" style={lin}>View Events</Link>
              </form>
        {status } <br></br>
  
        <Footer/>
                    </div>
    );
    
}
export default PhoeditEdit;