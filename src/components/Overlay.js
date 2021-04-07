import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {generalAction} from './../actions/generalAction';
class Overlay extends React.Component{

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
        <div className={`overlay ${this.props.generalState.mobileMenuOpened ? "open" : ""}`} onClick={this.toggleMobileMenu}></div>
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

export default connect(mapStateToProps, mapDispatchToProps) (Overlay);