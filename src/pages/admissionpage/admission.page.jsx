import React from 'react';
import './admission.style.scss';
import {Form, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {print} from '../../public/constant';
import axios from 'axios';

class AdmissionPage extends React.Component{
    state={
        validated:false,
        name:"",
        father_name:"",
        mobile:"",
        class:"",
        gender:"",
        address:"",
        dob:"",
        tac:"",
        tc_file:null,
        mc_file:null,
        pic_file:null
    }


    handleSubmit =async (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        if(form.checkValidity() === false){
            event.stopPropagation();
        }
        this.setState({
            validated:true
        })
        const data = {
            name:this.state.name,
            father_name:this.state.father_name,
            gender:this.state.gender,
            student_class:this.state.class,
            mobile:this.state.mobile,
            address:this.state.address,
            dob:this.state.dob
        }
        let formdata = new FormData();
        for(let k of Object.entries(data)){
            formdata.append(k[0],k[1])
            print(k)
        }
        
        formdata.append("tc",this.state.tc_file)
        formdata.append("migration",this.state.mc_file)
        formdata.append("photo",this.state.pic_file)
        print(formdata.get("tc"),"printing")

        axios.post("https://school-erp.herokuapp.com/registration",formdata,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }


    handleFileChange = event =>{
        const {id, files} = event.target;
        if(files && files[0]){
            this.setState({
                [id]:files[0]
            })
        }
    }


    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }


    render(){
        return(
            <div>
                <div className="admission-form">
                <Form noValidate  validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Student's name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Full name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Enter name please!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Father's name</Form.Label>
                        <Form.Control type="text" value={this.state.father_name} onChange={this.handleChange} name="father_name" placeholder="Father's Name" required/>
                        <Form.Control.Feedback >
                            Looks Good !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Enter father's name please!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="number" name="mobile" onChange={this.handleChange} value={this.state.mobile} placeholder="Mobile" required />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide number.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                        <Form.Label>Select class</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange} name="class" custom required>
                            <option value="" selected disabled>None</option>
                        {
                            Array.apply(null,{length:13}).map((val,index)=>index!==0?<option value={index}>{index}</option>:null)
                        }
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please provide Class.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom08">
                        <Form.Label>Select gender</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange} name="gender" custom required>
                            <option value="" selected disabled>None</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE" >Female</option>
                            <option value="OTHER" >Other</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please provide gender.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" onChange={this.handleChange} name="address" value={this.state.address} type="text" placeholder="Address" required />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide Address.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="dob" as={Col} md="4">
                        <Form.Label>Select Date of Birth</Form.Label>
                        <Form.Control type="date" onChange={this.handleChange} name="dob" placeholder="Date of Birth" required />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide DOB.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom09">
                        <Form.Label>Picture of student</Form.Label>
                        <Form.File 
                            onChange={this.handleFileChange}
                            id="pic_file"
                            label={this.state.pic_file?this.state.pic_file.name: "Select Picture"}
                            custom
                        />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide Photo.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom06">
                        <Form.Label>Transfer Certificate</Form.Label>
                        <Form.File 
                            onChange={this.handleFileChange}
                            id="tc_file"
                            label={this.state.tc_file?this.state.tc_file.name : "Select Transfer Certificate"}
                            custom
                        />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom07">
                        <Form.Label>Migration Certificate</Form.Label>
                        <Form.File 
                            onChange={this.handleFileChange}
                            id="mc_file"
                            label={this.state.mc_file?this.state.mc_file.name : "Select Migration Certificate"}
                            custom
                        />
                        <Form.Control.Feedback>
                            Looks Good !
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Check
                        required
                        onChange={this.handleChange}
                        name="tac"
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Button type="submit">Submit form</Button>
                    </Form.Group>
                    </Form>
                </div>
            </div>
        )
    }
}
export default AdmissionPage;