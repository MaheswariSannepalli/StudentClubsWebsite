import {useState, Component} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import React from "react";
import { Alert } from "react-bootstrap"
import ReactDOM from "react-dom/client";
import Robheader from './robheader';
import Footer from '../../footer';
import { Link ,Navigate} from "react-router-dom";
function RobViewRegVolunteers(){
    
    const location = useLocation()
    const { eventname } = location.state
    const [body, setBody] = useState();
    console.log("Function called");
    axios.get(`http://localhost:8080/robvolunteer`)
    .then(res => {
        console.log(res.data);
        setBody(res.data);
        
    })
    
    var heading = ['STUDENT ID','STUDENT NAME','STREAM','DEPARTMENT','YEAR','EMAIL'];
    
    var divStyle = {
        marginTop:'100px'
    }
    return (
        <div >
           <Robheader/>
           <h3 class="reg-head">Registered Volunteers for {eventname}</h3>
           {body &&
            <div style = {divStyle}>
                    <Table striped bordered hover variant="dark" heading={heading} body={body} eventname={eventname} />
                </div>
                }
                <div class="App">
        <Link to="/Robotics/Admin/ViewCoordinators/ViewEvents">VIEW EVENTS</Link>  
        </div>
        <Footer/>     
        </div>
      );
}

class Table extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        var eventname = this.props.eventname;
        return (
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} eventname={eventname}/>)}
                    
                </tbody>
            </table>
        );
    }
}
  
class TableRow extends Component {
  
    render() {
        var row = this.props.row;
        var eventname = this.props.eventname;
        console.log(row);
        if(row.event !== eventname)
        {
            return null;
        }
        return (
            <tr>
                <td>{row.studentid}</td>
                <td>{row.name}</td>
                <td>{row.stream}</td>
                <td>{row.dept}</td>
                <td>{row.year}</td>
                <td>{row.email}</td>
            </tr>       
        )
        }
}
export default RobViewRegVolunteers;