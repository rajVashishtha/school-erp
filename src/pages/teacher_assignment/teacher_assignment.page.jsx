import React from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';
import BasicDatePicker from '../../component/date_picker/date_picker.component';



class TeacherAssignmentPage extends React.Component{
    state={
        selectedDate:new Date()
    }
    handleDateChange = date=>{
        this.setState({selectedDate:date})
    }
    render(){
        return(
            <div>
                <div style={{width:"500px",padding:"30px 30px"}}>
                    <Form>
                        <Form.Group>
                            <Form.Control as={"textarea"} rows={3} placeholder="Assignment Details" />
                        </Form.Group>
                        <Form.Group style={{cursor:"pointer"}}>
                            <Form.File style={{cursor:"pointer"}}  custom id="exampleFormControlFile1" label="File as Assignment" />
                        </Form.Group>
                        <Form.Group>
                            {/* <FormControl>
                                <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
                                <Input
                                value={""}
                                onChange={this.handleChange}
                                name="textmask"
                                id="formatted-text-mask-input"
                                inputComponent={TextMaskCustom}
                                />
                            </FormControl> */}
                            <Row>
                                <Col>
                                    <BasicDatePicker selectedDate={this.state.selectedDate} 
                                        handleDateChange={this.handleDateChange} disableFuture={false} disablePast={true} />
                                </Col>
                                <Col style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end", paddingBottom:"10px"}}>
                                    <Button variant="outline-primary">Submit</Button>{' '}
                                </Col>
                            </Row>
                        </Form.Group>
                        
                    </Form>
                </div>
            </div>
        )
    }
}

export default TeacherAssignmentPage;