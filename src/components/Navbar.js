import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {generalAction} from './../actions/generalAction';
import { userAction } from "../actions/userAction";
class Navbar extends React.Component{

    componentDidMount(){
        
    }

    toggleMobileMenu = (e) => {
        this.props.generalAction('TOGGLE_MOBILE_MENU', true);
    }

    logout = () => {
        this.props.userAction('SET_LOGGED_IN',false);
        sessionStorage.setItem('isLoggedIn', false);
    }

    render(){
       return (
            <div className="top-header">
                <div>
                    <div className="mobile-menu" onClick={this.toggleMobileMenu}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="logo">
                        Chart Dashboard
                    </div>
                </div>
                <div>
                    <div className="logout" onClick={this.logout}> Logout</div>
                </div>
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
        generalAction : generalAction,
        userAction : userAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);