import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, Component } from "react";
import { Alert } from "react-bootstrap"
import Header22 from './header22';
import Footer from '../../footer';
import { Row, Col, Container, Button } from "react-bootstrap"
import Image from 'react-bootstrap/Image'

function LitAddEvent() {
  
  
      const [name,setName] = useState();      
      const [date, setDate] = useState();
      const [time, setTime] = useState();
      const [description, setDescription] = useState();
      const [status, setStatus] = useState(false);
      let file;
      
      const changeHandler = (event) => {
        // console.log("fileChanged");
        console.log(event.target.files[0])
       
        console.log("file",file);
        // console.log(event.target.files["names"])
        if (event.target && event.target.files[0]) {
            file = event.target.files[0]
        }
	    };

      function add(e) {
          e.preventDefault();
          console.log("function inside")
        console.log("file", file)

          let formData = new FormData();
          formData.append('name',name);
          formData.append('date', date);
          formData.append('time', time);
          formData.append('description', description);
          formData.append('file', file);
          
          console.log("Function called", formData);
          axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
          axios({
            method: "post",
            url: "http://localhost:8080/litevents",
            data: formData,
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
  
      return (
          
        <div >
        <Header22/>
        <Container >
        
            <Row>
  
                <Col>
                    <div >
                    {
            status && <Alert  variant="success">
              <Alert.Heading>new Event Added</Alert.Heading>
              
            </Alert>}
        <h3 class="reg-head">Add new Event</h3>
        <form class="form-reg" encType="multipart/form-data" onSubmit={add} >
              <p></p>
              <input type="text" class="input_label" placeholder="Enter name of the event" value={name} onChange={(e)=>setName(e.target.value)}/>
              <br></br>
              <input type="text" class="input_label" placeholder="Enter date of the event" value={date} onChange={(e)=>setDate(e.target.value)}/>
              <br></br>
              <input type="text" class="input_label" placeholder="Enter time" value={time} onChange={(e)=>setTime(e.target.value)}/>
              <br></br>
              <input type="text" class="input_label" placeholder="Add description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
              <br></br>
              <input type="file" class="input_label" accept=".jpg,.jpeg,.png" placeholder="Event Poster" onChange={changeHandler}/>
              <br></br>
              <Button type="" style={buttn}>ADD</Button>
              <Link to="/Literary/Admin/ViewCoordinators/ViewEvents" style={lin}>VIEW EVENTS</Link>      
              </form>
        {status } <br></br>
  
                    </div>
                    
                </Col>
            </Row></Container>
        <Footer/>
    </div>
      )
          
  }
  
  export default LitAddEvent;