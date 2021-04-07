import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userAction} from './../actions/userAction';

class Navbar extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
            <div class="top-header">
                <div>Chart Dashboard</div>
                <div>
                    <a href="#">Logout</a>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userState: state.users
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        userAction : userAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);