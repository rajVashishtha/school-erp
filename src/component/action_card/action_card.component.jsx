import React from 'react';
import {Paper} from '@material-ui/core';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router';

class ActionCard extends React.Component{
    render(){
        const {title, desc, href, history} = this.props;
        return(
            <div>
                <Paper style={{padding:"10px 20px"}}>
                    <h3>{title}</h3>
                    <p className="text-secondary">Description</p>
                    <p style={{lineHeight:"1px"}}>{desc}</p>
                    <Button variant="outlined-primary" className="btn-outline-info" onClick={()=>{
                        history.push(href);
                    }} >Assign</Button>
                </Paper>
            </div>
        )
    }
}

export default withRouter(ActionCard);