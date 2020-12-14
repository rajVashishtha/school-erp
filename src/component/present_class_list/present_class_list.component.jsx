import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import NestedList from '../nested_list/nested_list.component';

const myStyles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
    minWidth:250,
    backgroundColor: theme.palette.background.paper,
    height:"99vh"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class PresentClassList extends React.Component{
  state={
    school_classes:[]
  }


  componentDidMount(){
    const {school_classes} = this.props;
    console.log(school_classes);
    this.setState({school_classes:school_classes});
  }

  render(){
    const {title, id, classes} = this.props;
  return (
    <List
      component="nav"
      aria-labelledby={id}
      subheader={
        <ListSubheader component="div" id={id}>
          {title}
        </ListSubheader>
      }
      style={{borderRight:"1px solid #888888"}}
      className={classes.root}
    >
    {
      this.state.school_classes.map(item=>(
        <NestedList title={item.class} sections={item.sections} key={`nested-${item.class}`} />
      ))
    }    
    </List>
  );
  }
}

export default withStyles(myStyles, {withTheme:true})(PresentClassList);