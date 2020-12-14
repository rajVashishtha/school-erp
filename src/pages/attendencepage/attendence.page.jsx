import React from 'react';
import {Button, Table} from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import {RadioGroup, FormControlLabel} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Axios from 'axios';

const PresentRadio = withStyles({
    root: {
      color: "#55CC10",
      '&$checked': {
        color: "#55CC10",
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const AbsentRadio = withStyles({
    root: {
      color: "#D1230E",
      '&$checked': {
        color: "#D1230E",
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


const HalfdayRadio = withStyles({
    root: {
      color: "#0F59D3",
      '&$checked': {
        color: "#0F59D3",
      },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


class AttendencePage extends React.Component{
    state={
        students:[
        ],
        attendence: new Map(),
        submitting:false,
        loading:true
    }

    componentDidMount(){
        Axios.get("http://school-erp.herokuapp.com/students").then(res=>{
            this.setState({students:res.data.students},()=>{
                let att = new Map();
                for(let i=0; i < this.state.students.length;i++){
                    att.set((this.state.students[i].id).toString(), "0");
                }
                this.setState({
                    attendence:att,
                    loading:false
                })
            })
            
        }).catch(err=>{
            console.log(err);
            this.setState({loading:false})
        })
    }


    handleRadioChange = event =>{
        const {name, value} = event.target;
        console.log(name)
        let copy = this.state.attendence;
        copy.set((name), (value));
        this.setState({
            attendence : copy
        })
    }
    reviver = (key, value)=> {
        if(typeof value === 'object' && value !== null) {
            if (value.dataType === 'Map') {
            return new Map(value.value);
            }
        }
        return value;
    }

    replacer = (key, value) =>{
        const originalObject = this[key];
        if(originalObject instanceof Map) {
          return {
            dataType: 'Map',
            value: Array.from(originalObject.entries()), // or with spread: value: [...originalObject]
          };
        } else {
          return value;
        }
    }

    handleSubmit = event =>{
        const str = JSON.stringify(this.state.attendence, this.replacer);
        const newValue = JSON.parse(str, this.reviver);
        this.setState({submitting:true})
        Axios.post("http://school-erp.herokuapp.com/attendance",newValue).then(res=>{
            console.log(res.data.message)
            this.setState({submitting:false})
        }).catch(err=>{
            console.log(err)
            this.setState({submitting:false})
        })
    }

    
    render(){
        return(
          this.state.loading?(
            <div style={{width:"80vw",marginLeft:"auto",marginRight:"auto" ,marginTop:"20px"}}>
                <Skeleton height={100} animation="wave" />
                <Skeleton height={100} animation="wave" />
                <Skeleton height={100} animation="wave" />
                <Skeleton height={100} animation="wave" />
            </div>
          ):(

            <div style={{width:"94vw",marginLeft:"auto",marginRight:"auto"}}>
                
              <Table bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Roll Number</th>
                    <th>Attendence</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.students.map((item, index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>
                                    <RadioGroup row aria-label={`${item.id}`} name={`${item.id}`} value={`${this.state.attendence.get(item.id.toString())}`} onChange={this.handleRadioChange}>
                                        <FormControlLabel value="0" control={<AbsentRadio />} label="A" />
                                        <FormControlLabel value="2" control={<PresentRadio />} label="P" />
                                        <FormControlLabel value="1" control={<HalfdayRadio />} label="HD" />
                                    </RadioGroup>
                                </td>
                            </tr>
                        )
                    })
                }
                {
                    !this.state.students && (
                        <h2 align="center" style={{marginTop:"30px"}}>No Students</h2>
                    )
                }
                </tbody>
                </Table>
                <Button onClick={this.handleSubmit}>{
                    this.state.submitting?("Loading..."):("Submit")
                }</Button>
            </div>

          )
        )
    }
}


export default AttendencePage;