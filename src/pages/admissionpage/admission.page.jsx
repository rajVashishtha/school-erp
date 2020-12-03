import React from 'react';
import './admission.style.scss';
import {Form, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class AdmissionPage extends React.Component{
    state={
        validated:false
    }
    handleSubmit = (event)=>{
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({
            validated:true
        })
    }
    render(){
        return(
            <div>
                <div className="admission-form">
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>Student's name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Enter name please!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label>Father's name</Form.Label>
                        <Form.Control type="text" placeholder="Father's Name" required/>
                        <Form.Control.Feedback >
                            Looks Good !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Enter father's name please!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom03">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="number" placeholder="Mobile" required />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide number.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Select class</Form.Label>
                        <Form.Control as="select" custom required>
                            <option value="" selected disabled>None</option>
                        {
                            Array.apply(null,{length:13}).map((val,index)=>index!==0?<option>{index}</option>:null)
                        }
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please provide Class.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" type="text" placeholder="Address" required />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide Address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="dob" as={Col} md="3">
                        <Form.Label>Select Date of Birth</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Date of Birth" required />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide DOB.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom06">
                        <Form.Label>Transfer Certificate</Form.Label>
                        <Form.File 
                            id="tc-file"
                            label="Select Transfer Certificate"
                            custom
                        />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom07">
                        <Form.Label>Migration Certificate</Form.Label>
                        <Form.File 
                            id="tc-file"
                            label="Select Migration Certificate"
                            custom
                        />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                        <Button type="submit">Submit form</Button>
                    </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}
export default AdmissionPage;