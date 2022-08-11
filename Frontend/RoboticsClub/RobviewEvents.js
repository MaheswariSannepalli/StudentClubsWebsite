import {useState, Component} from "react";
import axios from 'axios';
import React from "react";
import { Alert } from "react-bootstrap"
import ReactDOM from "react-dom/client";
import Robheader from './robheader';
import Footer2 from '../../footer2';
import { Link ,Navigate} from "react-router-dom";
import { generatePath } from "react-router";

function RobViewEvents() {
    
    const [body, setBody] = useState();
    
    console.log("Function called");
    axios.get(`http://localhost:8080/robevent`)
    .then(res => {
        console.log(res.data);
        setBody(res.data);
        
    })
    
    var heading = ['NAME','DATE','TIME','DESCRIPTION','POSTER', 'DELETE','CHECK','CHECK'];
    
    var divStyle = {
        marginTop:'100px'
    }
    var butngap = {
        margin:'10px'
   }
    return (
        <div >
           <Robheader/>
           <h3 class="reg-head">Event Details</h3>
           {body &&
            <div style = {divStyle}>
                    <Table striped bordered hover variant="dark" heading={heading} body={body} />
                </div>
                }
                <div class="App">
        <Link to="/Robotics/Admin/ViewCoordinators/AddEvent" style={butngap}>ADD EVENT</Link>
        <Link to="/Robotics/Admin/ViewCoordinators">VIEW COORDINATORS</Link>  
        </div>
        <Footer2/>     
        </div>
      );
}

class Table extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                    
                </tbody>
            </table>
        );
    }
}
  
class TableRow extends Component {
   
    render() {
        var row = this.props.row;
        console.log(row);

    function deleteadmin()
    {
            axios.delete(`http://localhost:8080/robevent/${row.name}`)
            .then(res => {
              console.log(res.data);
              })
             return(
                 <Alert.Heading>Event Removed SUCCESSFULLY</Alert.Heading>
                   );
    }
    const butt = {
        padding:'5px',
        margin:'10px' ,
        width:'90%' ,
        fontSize:'17px'
    }
    const butt1 = {
        padding:'5px',
        margin:'10px' ,
        width:'90%' ,
        fontSize:'12px'
    }
    const del = {
        margin:'10px',
        border: 'rgba(238, 227, 227, 0.5)',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    }
   
        return (
            <tr>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.description}</td>
                <td><img style={{width:'200px',height:'200px'}} src={`data:image/jpeg;base64,${row.file}`}/></td>
                <td><button className="btn btn-danger" style={del} onClick={ ()=> { window.confirm("You want to delete the event "+row.name) && deleteadmin() }}>Delete</button></td>
                <td>
                <Link to="/Robotics/Admin/ViewCoordinators/ViewRegisteredStudents" state={{ eventname: row.name }} style={butt1}>Registered Students</Link>
                </td>
                <td>
                <Link to="/Robotics/Admin/ViewCoordinators/ViewRegisteredVolunteers" state={{ eventname: row.name }} style={butt1}>View Volunteers</Link>
                </td>
            </tr>
            
            
        )
        }
}



  
export default RobViewEvents;