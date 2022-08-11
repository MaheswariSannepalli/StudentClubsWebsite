import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function Phoheader() {

  const headStyle = {
    color: 'white',
    fontSize: '36px',
    left:'50px',
    textAlign: 'center',
    lineHeigth: '42px',
    padding:'20px'
    
}
const headStyle2 = {
    color: 'rgb(3, 46, 90)',
    fontSize: '40px',
    lineHeigth: '42px',
    textAlign: 'center',
    
}

const divHeadStyle = {
    backgroundColor: 'rgb(58, 58, 64)',
  size: '40px',
 // position: 'fixed',
  top: '0px',
  width:'100%',
  lineHeigth: '42px',
}
const divHeadStyle2 = {
    backgroundColor: '#ffffffff',
  size: '40px',
 // position: 'fixed',
 marginTop: '-68px',
  width:'30%',
  marginLeft:'-6%'
}
const divHeadStyle3 = {
  backgroundColor: '#ffffffff',
  size: '40px',
//position: 'fixed',
marginTop: '20px',
left:'500px'
}
  return (
    <div>
    <div static style={divHeadStyle}>
      <h1 style={headStyle}>PUDUCHERRY TECHNOLOGICAL UNIVERSITY</h1>
    </div>
    <div static style={divHeadStyle3}>
       <p style={headStyle2}>Student Clubs Information-Photography Club</p>
    </div>
    <div static style={divHeadStyle2}>
       <img src="/club.png" className="App-logo1"  alt="logo" />
    </div>
    </div>
  )
}

export default Phoheader;