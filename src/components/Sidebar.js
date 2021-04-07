import React from "react";
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { generalAction } from "../actions/generalAction";

class Sidebar extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
            <div className={`sidebar ${this.props.generalState.mobileMenuOpened ? "open" : ""}`} >
                <ul>
                    <li><Link to="/"><i className="fa fa-cloud"></i> Daily Weather Forecast </Link></li>
                    <li><Link to="/hourly"><i className="fa fa-bolt"></i> Hourly Weather Forecast </Link></li>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        generalState: state.generals
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        generalAction : generalAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);