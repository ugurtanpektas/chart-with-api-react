import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userAction} from './../actions/userAction';
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar'

class Home extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
        <div className="App">   
            <Navbar />
            <Sidebar />
            <div class="main">
            <h1>Hourly</h1>
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

export default connect(mapStateToProps, mapDispatchToProps) (Home);