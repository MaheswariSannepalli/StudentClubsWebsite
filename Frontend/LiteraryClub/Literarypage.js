import {useState, Component} from "react";
import axios from 'axios';
import Header22 from './header22';
import Footer2 from '../../footer2';
import Litbanner from "./Litbanner";
import {
  Link,
  Navigate,
} from "react-router-dom";
 
  function LiteraryPage() {

    const [body, setBody] = useState();
    const [body1, setBody1] = useState();
    
    console.log("Function called");
    axios.get(`http://localhost:8080/litevent`)
    .then(res => {
        console.log(res.data);
        setBody(res.data);
        
    })
    function callApiFunction() {
      
      console.log("Function called");
      axios.get(`http://localhost:8080/litadmin`)
      .then(res => {
          console.log(res.data);
          setBody1(res.data);
          
      })}
      var divStyle = {
          marginTop:'100px'
      }
      var lin = {
        margin:'10px',
        marginLeft:'30%',
      }
      const buttn = {
        color: 'white',
        backgroundColor: 'rgb(5, 66, 127)',
        border: 'rgba(238, 227, 227, 0.5)',
        padding:'5px',
        fontSize: '20px',
        margin:'10px',
        width:'15%',
        textAlign: 'center',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    }
    
    return (
        <div>
          <Header22/>
        <Link to="/Literary/ClubRegistration" style={lin}>Register for Club</Link>
        <Link to="/Literary/Admin">Admin Portal</Link>
        <button onClick={() => callApiFunction()} style={buttn}>View Coordinators</button>
        <br></br>
                <Litbanner/>
                <br></br>
                <div class="row">
                  <div class="column1">
                    {body &&
                       <div style={divStyle}>
                            <Table1 striped bordered hover variant="dark"  body={body} />
                       </div>
                     }
                  </div>
                  <div class="column2">
                    {body1 &&
                            <div style={divStyle}>
                              <Table body1={body1} />
                            </div>
                    }
                 </div>
                </div>
        <Footer2/>
        </div>
    );
  }
  class Table1 extends Component {
    render() {
        var body = this.props.body;
        return (
          
            <table class = "table_">              
              <thead>
                    <tr >
                        <h1 class="App">UPCOMING EVENTS</h1>
                    </tr>
                </thead>
                <br></br>
                <tbody>
                    {body.map(row1 => <TableRow1 row1={row1} />)}
                    
                </tbody>
            </table>
        );
    }
}
class TableRow1 extends Component {
   
  render() {
      var row1 = this.props.row1;
      console.log(row1);

      const divStyle={
        marginRight:'1%',
      }
      return (
          <tr class="table_row">
             <section class="App">
              <p>{row1.name} - {row1.date} {row1.time}</p>
              <p>DESCRIPTION - {row1.description}</p>
              <p><img style={{width:'600px',height:'500px'}} src={`data:image/jpeg;base64,${row1.file}`}/></p>
             <p> <Link to="/Literary/EventRegistration" state={{ eventname: row1.name }} style={divStyle}>Register</Link>
              <Link to="/Literary/EventVolunteer" state={{ eventname: row1.name }}>Volunteer</Link></p>
             
             
              </section>
          </tr>
      )
      }
}
  class Table extends Component {
    render() {
      var body1 = this.props.body1;
     return (
       <table class = "table_">
        <thead>
                    <tr >
                        <h1 class="App">Coordinators</h1>
                    </tr>
                </thead>
           <tbody>
               {body1.map(row => <TableRow row={row} />)}
               
           </tbody>
       </table>
   );
 }
}
class TableRow extends Component {
    render() 
    {
          var row = this.props.row;
          console.log(row);

         return (
             <tr class="table_row">
               <section class="App">
                <br></br>
               <p>{row.corole} - {row.coname} </p>
               <p>{row.codept} Department</p>
               <p>mail id-{row.coemail}</p>
             </section>
           </tr>
            )
    }
 }

 
  

  export default LiteraryPage;