import React from 'react';
import {Navbar,Row,Col,ListGroup,Tab,Button} from 'react-bootstrap';
import StudentAssignmentCard from '../../component/student_assignment_card/student_assignment_card.component';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import { IconButton,Drawer, withStyles } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import BasicDatePicker from '../../component/date_picker/date_picker.component';
import { NavigateBeforeOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const drawerWidth = 240;

const styleForDrawer = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
        marginTop:55,
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
        marginTop:55,
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });




class StudentAssignmentPage extends React.Component{

    state={
        selectedDate:new Date(),
        open:window.innerWidth < 960?false:true,
        windowWidth: window.innerWidth
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth },()=>{
            if(this.state.windowWidth < 960){
                this.setState({
                    open:false
                })
            }
            else{
                this.setState({
                    open:true
                })
            }
        });
    };

    handleDrawerToggle = event =>{
        this.setState({
            open:!this.state.open
        })
    }

    handleDateChange = (date)=>{
        this.setState({
            selectedDate:date
        })
        return
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
      

    render(){
        const {classes} = this.props;
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        Microsun Global LLp
                    </Navbar.Brand>
                </Navbar>
                <div style={{marginTop:"20px"}}>
                    
                    <Tab.Container id="assignment-tabs" defaultActiveKey="#link1">

                        <Row style={{marginLeft:"0px", marginRight:"0px"}}>
                        {
                            !this.state.open?(<IconButton onClick={this.handleDrawerToggle}>
                                <MoreVertIcon />
                            </IconButton>):(null)
                        }
                            <Drawer
                                className={classes.drawer}
                                variant="persistent"
                                anchor="left"
                                open={this.state.open}
                                classes={{
                                paper: classes.drawerPaper,
                                }}
                            >       
                            <div style={{display:"flex", justifyContent:"flex-end"}}>
                                <IconButton onClick={this.handleDrawerToggle}>
                                    <NavigateBeforeOutlined />
                                </IconButton>
                            </div>
                                <ListGroup>
                                    <ListGroup.Item action href="#link1">
                                        Teacher 1
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2">
                                        Teacher 2
                                    </ListGroup.Item>
                                </ListGroup>
                            </Drawer>
                            <Col md={9}>
                                
                                <Tab.Content>
                                
                                    <Tab.Pane eventKey="#link1">
                                        <Row>
                                            <Col sm={4}  >
                                                <div style={{marginLeft:"auto",marginRight:"auto"}}>
                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                        <BasicDatePicker selectedDate={this.state.selectedDate} 
                                                            handleDateChange={this.handleDateChange} />
                                                    </MuiPickersUtilsProvider>
                                                </div>
                                            </Col>
                                            <Col sm={4} style={{display:"flex" ,alignItems:"flex-end"}}>
                                            {
                                                this.state.windowWidth > 960?(
                                                    <IconButton >
                                                        <NavigateNextOutlinedIcon />
                                                    </IconButton>
                                                ):(
                                                    <Button style={{marginLeft:"30px"}}>Submit</Button>
                                                )
                                            }
                                            </Col>
                                        </Row>
                                        <StudentAssignmentCard />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link2">
                                        <Row  style={{marginLeft:"30px"}} >
                                            <Col sm={4}  style={{display:"flex",flexDirection:"row", alignItems:"flex-end"}}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <BasicDatePicker selectedDate={this.state.selectedDate} 
                                                        handleDateChange={this.handleDateChange} />
                                                </MuiPickersUtilsProvider>
                                                <IconButton>
                                                    <NavigateNextOutlinedIcon />
                                                </IconButton>
                                            </Col>
                                        </Row>
                                        <StudentAssignmentCard />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>  
                    </Tab.Container>
                </div>
            </div>
        )
    }
}


export default withStyles(styleForDrawer, {withTheme:true})(StudentAssignmentPage);