import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userAction} from './../actions/userAction';

class Login extends React.Component{
    
    componentDidMount(){
        
    }

    handleLogin = async (e) => {
        e.preventDefault();
        console.log('handle login');
        this.props.userAction('SET_LOGGED_IN',true);
        this.props.history.push('/');

    }
    render(){
       return (
            <div className="login-container">
                <form onSubmit={this.handleLogin}>
                    <div>
                        <input type="email" name="email" placeholder="Email address" required/>
                        <button type="submit">Login</button>
                    </div>
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps) (Login);