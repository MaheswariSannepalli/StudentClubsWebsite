import {useState, Component} from "react";
import axios from 'axios';
import React from "react";
import { Alert } from "react-bootstrap"
import ReactDOM from "react-dom/client";
import Spoheader from './spoheader';
import Footer2 from '../../footer2';
import { Link ,Navigate} from "react-router-dom";
import { generatePath } from "react-router";

function SpoViewCoordinators() {
    
    const [body, setBody] = useState();
    
    console.log("Function called");
    axios.get(`http://localhost:8080/spoadmin`)
    .then(res => {
        console.log(res.data);
        setBody(res.data);
        
    })
    
    var heading = ['ID', 'NAME','DEPARTMENT','ROLE','EMAIL','PASSWORD', 'UPDATE', 'DELETE'];
    
    var divStyle = {
        marginTop:'50px'
    }
    var butngap = {
         margin:'10px'
    }
    return (
        <div >
           <Spoheader/>
           <h3 class="reg-head">Coordinator Details</h3>
           {body &&
            <div style = {divStyle}>
               
                    <Table striped bordered hover variant="dark" heading={heading} body={body} />
                </div>
                }
                 <br></br>
                 <div class="App">
        <Link to="/Sports/Admin/ViewCoordinators/Add" style={butngap}>ADD ADMIN</Link>
        <Link to="/Sports/Admin/ViewCoordinators/ViewEvents">VIEW EVENTS</Link>   
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
            axios.delete(`http://localhost:8080/spoadmin/${row.coid}`)
            .then(res => {
              console.log(res.data);
              })
             return(
                 <Alert.Heading>Coordinator Removed SUCCESSFULLY</Alert.Heading>
                   );
    }
    const butt = {
        padding:'7px',
        margin:'10px' ,
        width:'50%' ,
        fontSize:'17px'
    }
    const del = {
        margin:'10px',
        border: 'rgba(238, 227, 227, 0.5)',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    }
        return (
            <tr>
                <td>{row.coid}</td>
                <td>{row.coname}</td>
                <td>{row.codept}</td>
                <td>{row.corole}</td>
                <td>{row.coemail}</td>
                <td>{row.copassword}</td>
                <td>  
                <Link to="/Sports/Admin/ViewCoordinators/Edit" state={{ cordid: row.coid,
                                                                          cordname:row.coname,
                                                                          corddept: row.codept,
                                                                          cordrole:row.corole,
                                                                          cordemail: row.coemail,
                                                                          cordpass:row.copassword }} style={butt}>Edit</Link>
                </td>
                <td><button className="btn btn-danger" style={del} onClick={ ()=> { window.confirm("You want to delete the admin "+row.coid) && deleteadmin() }}>Delete</button></td>
            </tr>
            
            
        )
        }
}



  
export default SpoViewCoordinators;