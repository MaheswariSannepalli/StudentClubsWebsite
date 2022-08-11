import { useLocation } from "react-router-dom";
import {useState, Component} from "react";
import { Alert } from "react-bootstrap";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header22 from './header22';
import Footer from '../../footer';
import axios from 'axios';
import React from "react";
function LitEditEvent(){
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
        let file;
      
      const changeHandler = (event) => {
        // console.log("fileChanged");
        console.log(event.target.files[0])
       
        console.log("file",file);
        // console.log(event.target.files["names"])
        if (event.target && event.target.files[0]) {
            file = event.target.files[0]
            console.log("file2", file)
        }
	    };
        function Edit(e) {
            e.preventDefault();
            console.log("file inside", file)

            let editData = {
                name, date, time,description,file
            }
    
            console.log("Function called", editData);
            axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            axios.put({
                method: "put",
                url:"http://localhost:8080/litevent/event/${name}",
                data:editData,
                headers: { "Content-Type": "multipart/form-data" },
              })
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
            <Header22/>
                    {
            status && <Alert  variant="success">
              <Alert.Heading>Event Details edited Successfully</Alert.Heading>
              
            </Alert>}
            <h3 class="reg-head">Edit Event</h3>
        <form class="form-reg" encType="multipart/form-data" onSubmit={Edit}>
              <p></p>
              <input type="text" class="input_label" value={name}  onChange={e => setName(e.target.value)}/>
              <br></br>
              <input type="text" class="input_label" value={date} onChange={e => setDate(e.target.value)}/>
              <br></br>
              <input type="text" class="input_label" value={time} onChange={e => setTime(e.target.value)}/>
              <br></br>
              <input type="text" class="input_label" value={description} onChange={e => setDescription(e.target.value)}/>
              <br></br>
              <input type="file" class="input_label" accept=".jpg,.jpeg,.png" placeholder="Event Poster" onChange={changeHandler}/>
              <br></br>
              <Button type="" style={buttn} >EDIT</Button>
              <Link  to="/Literary/Admin/ViewCoordinators/ViewEvents" style={lin}>View Events</Link>
              </form>
        {status } <br></br>
  
        <Footer/>
                    </div>
    );
    
}
export default LitEditEvent;