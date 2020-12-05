import React from 'react';
import {Button, Table} from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import {RadioGroup, FormControlLabel} from '@material-ui/core'

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
            {
                name:"Raj",roll_no:1
            },
            {
                name:"Satyam",roll_no:2
            },
            {
                name:"Anmol",roll_no:3
            },
            {
                name:"Ashutosh",roll_no:4
            },
            {
                name:"Mayank",roll_no:5
            }
        ],
        attendence:["A","A","A","A","A"]
    }

    handleRadioChange = event =>{
        const {name, value} = event.target;
        let copy = this.state.attendence;
        copy[parseInt(name)-1] = value;
        this.setState({
            attendence : copy
        },()=>{
            console.log(this.state.attendence)
        })
    }
    render(){
        return(
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
                    this.state.students.map((item, index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.roll_no}</td>
                            <td>
                                <RadioGroup row aria-label={`${item.roll_no}`} name={`${item.roll_no}`} value={this.state.attendence[index]} onChange={this.handleRadioChange}>
                                    <FormControlLabel value="A" control={<AbsentRadio />} label="A" />
                                    <FormControlLabel value="P" control={<PresentRadio />} label="P" />
                                    <FormControlLabel value="HD" control={<HalfdayRadio />} label="HD" />
                                </RadioGroup>
                            </td>
                        </tr>
                    ))
                }
                    {/* <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr> */}
                </tbody>
                </Table>
                <Button onClick={()=>{console.log("Submited")}}>Submit</Button>
          </div>
        )
    }
}


export default AttendencePage;