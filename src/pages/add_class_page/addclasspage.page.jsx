import React from 'react';
import PresentClassList from '../../component/present_class_list/present_class_list.component';
import axios from 'axios';
import {Form} from 'react-bootstrap';

class AddClassPage extends React.Component{
    state={
        classes:[]
    }
    componentDidMount(){
        axios.get("http://school-erp.herokuapp.com/classes").then(res=>{
            this.setState({classes:res.data.classes},()=>{
                console.log(this.state.classes)
            });
        }).catch(err=>{
            console.log(err)
        })
    }

    render(){
        return (
            <div style={{display:"flex",flexDirection:"row"}}>
                <div>
                    <PresentClassList title="Present Classes" id="present_classes" school_classes={this.state.classes} />
                   
                </div>
                <div style={{width:"100%"}}>
                    <h1 style={{textAlign:"center"}}>Add Classes and sections</h1>
                    <Form onSubmit={this.handleSubmit}>
                        
                    </Form>
                </div>
            </div>
        )
    }
}

export default AddClassPage;