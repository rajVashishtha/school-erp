import React from 'react';
import ActionCard from '../../component/action_card/action_card.component';
import { withRouter } from 'react-router';


class AdminPage extends React.Component{
    state={
        actions:[
            {
                title:"Assign class teachers",desc:"Assign each class it's class teacher",href:"/add_class"
            },
            {
                title:"Assign students to sections",desc:"Assign each student it's section",href:"#/add_class"
            },
            {
                title:"Add class and section",desc:"Add new classes and sections to your school",href:`${this.props.history.location.pathname}/add_class`
            }
        ]
    }
    componentDidMount(){
    }
    render(){
        return(
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",marginTop:"20px"}}> 
            {
                this.state.actions.map(item=>(
                    <ActionCard href={item.href} title={item.title} desc={item.desc} />
                ))
            }

            </div>
        )
    }
}


export default withRouter(AdminPage);