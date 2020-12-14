import React from 'react';
import {List, ListSubheader} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Collapse, IconButton} from '@material-ui/core';
import { DeleteOutlined, ExpandMoreOutlined, ExpandLessOutlined } from '@material-ui/icons';

class NestedList extends React.Component{
    state={
        title:"Raj Vashisht",
        sections:[],
        open:false

    }
    handleExpand = ()=>{
        this.setState({open:!this.state.open})
    }

    componentDidMount(){
        const {title, sections} = this.props;
        this.setState({
            title:title,sections:sections
        })
    }
    componentWillUnmount(){
        this.setState({title:"",sections:[]})
    }

    render(){
        return(
            <React.Fragment>
            <ListItem >
                <ListItemText primary={`Class ${this.state.title}`} />
                <ListItemIcon>
                    <IconButton>
                        <DeleteOutlined />
                    </IconButton>
                    <IconButton onClick={this.handleExpand}>
                    {
                        this.state.open?(<ExpandLessOutlined />):(<ExpandMoreOutlined />)
                    }
                    </IconButton>
                </ListItemIcon>
            </ListItem>
            <Collapse in={this.state.open} unmountOnExit>
                <List component={"nav"} disablePadding subheader={
                    <ListSubheader component="nav">
                        Sections
                    </ListSubheader>
                }>
                {
                    this.state.sections.map(item=>(
                        <ListItem key={`nested-${this.state.title}-${item}`}>
                            <ListItemText primary={`Section ${item}`} />
                            <ListItemIcon>
                                <IconButton>
                                    <DeleteOutlined />
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    ))
                }
                </List>
            </Collapse>
            </React.Fragment>
        )
    }
}

export default NestedList;