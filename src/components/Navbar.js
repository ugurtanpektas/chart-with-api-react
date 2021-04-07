import React from "react";
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {generalAction} from './../actions/generalAction';
class Navbar extends React.Component{

    componentDidMount(){
        
    }

    toggleMobileMenu = (e) => {
        this.props.generalAction('TOGGLE_MOBILE_MENU', true);
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
                    <Link to="/login"> Logout</Link>
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
        generalAction : generalAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);