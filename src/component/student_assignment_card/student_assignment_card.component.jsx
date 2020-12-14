import { Collapse,TextareaAutosize, Tooltip} from '@material-ui/core';
import React from 'react';
import {Card,Row,Col,Form} from 'react-bootstrap';


class StudentAssignmentCard extends React.Component{
    state={
        summary:false
    }

    render(){
        return(
            <Card style={{ width:"100%",border:"none" }}>
                <Card.Body>
                    <Card.Title>Home work </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Due -</Card.Subtitle>
                    <Card.Text>
                        Some quick homework text to build on the homework title and make up the bulk of
                        the homework's content.
                    </Card.Text>
                    <Collapse in={this.state.summary} timeout="auto" unmountOnExit>
                        <TextareaAutosize aria-label="Summary about submission" rowsMin={3} placeholder="Summary about submission"
                            style={{
                                width:"100%"
                            }}
                        />
                    </Collapse>
                    <Row>
                    <Col md={4} className="mt-3">
                        <Card.Link href="#">See Attachment</Card.Link>
                    </Col>
                    <Col md={8} className="mt-2">
                        <Row>
                            <Col md={3} className="mt-2">
                                <Tooltip title="Add homework summary" arrow={true}>
                                    <Card.Link onClick={()=>{
                                        this.setState({summary:!this.state.summary})
                                    }} style={{cursor:"pointer"}}>Add Summary</Card.Link>
                                </Tooltip>
                            </Col>
                            <Col md={9} className="mt-2">
                                <Form.File 
                                style={{cursor:"pointer !important"}}
                                id="assignment-file"
                                label="Submit Assignment"
                                custom
                            />
                            </Col>
                        </Row>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default StudentAssignmentCard;