import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import './homepage.style.scss'

class HomePage extends React.Component{
    render(){
        return(
            <div style={{
                display:"flex",
                height:"100vh",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <div style={{width:"100vw",display:"flex",justifyContent:"space-around", alignItems:"stretch", alignContent:"space-around"}}>
                    <Button variant="outline-primary" onClick={()=>{this.props.history.push("/admission")}}>Student Admission</Button>
                    <Button variant="outline-success" onClick={()=>{this.props.history.push("/attendence")}}>Student Attendence</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage);