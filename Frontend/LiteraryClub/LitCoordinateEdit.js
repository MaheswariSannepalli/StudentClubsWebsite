import { useLocation } from "react-router-dom";
import {useState, Component} from "react";
import { Alert } from "react-bootstrap";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header22 from './header22';
import Footer from '../../footer';
import axios from 'axios';
import React from "react";
function LitcoordinateEdit(){
    const location = useLocation()
    const { cordid } = location.state
    const { cordname } = location.state
    const { corddept } = location.state
    const { cordrole } = location.state
    const { cordemail } = location.state
    const { cordpass } = location.state
    console.log("received values",cordid);
      const [status, setStatus] = useState(false);
     /* const [body,setBody] = useState();
        console.log("got id",student);
        console.log("Function called");
        axios.get(`http://localhost:8080/litadmin/${student}`)
        .then(res => {
            console.log("res data",res.data);
            setBody(res.data);
            console.log("body data",body);
           
        })*/
       
        const [coid, setCoid] = useState(cordid);  
        const [coname,setConame] = useState(cordname);    
        const [codept, setCodept] = useState(corddept);
        const [corole, setCorole] = useState(cordrole);
        const [coemail, setCoemail] = useState(cordemail);
        const [copassword, setCopassword] = useState(cordpass);

        function Edit(e) {
            e.preventDefault();
            let editData = {
                coid, coname, codept, corole, coemail, copassword
            }
    
            console.log("Function called", editData);
            axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            axios.put(`http://localhost:8080/litadmin/edit/${coid}`, editData)
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
              <Alert.Heading>Coordinator Details edited Successfully</Alert.Heading>
              
            </Alert>}
        <h3 class="reg-head">Edit Coordinator Details</h3>
        <form class="form-reg">
              <p></p>
              <input  type="text" value={coid}  onChange={e => setCoid(e.target.value)} />
              <br></br>
              <input type="text" value={coname}  onChange={e => setConame(e.target.value)}/>
              <br></br>
              <input type="text" value={codept} onChange={e => setCodept(e.target.value)}/>
              <br></br>
              <input type="text" value={corole} onChange={e => setCorole(e.target.value)}/>
              <br></br>
              <input type="text" value={coemail} onChange={e => setCoemail(e.target.value)}/>
              <br></br>
              <input type="text" value={copassword} onChange={e => setCopassword(e.target.value)}/>
              <br></br>
              <Button type="" style={buttn} onClick={Edit}>EDIT</Button>
              <Link  to="/Literary/Admin/ViewCoordinators" style={lin}>View Coordinators</Link>
              </form>
        {status } <br></br>
  
        <Footer/>
                    </div>
    );
    
}
export default LitcoordinateEdit;