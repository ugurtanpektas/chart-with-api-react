import React from "react";
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
            <div class="sidebar">
                <ul>
                    <li><Link to="/">Daily Forecast </Link></li>
                    <li><Link to="/hourly">Hourly Forecast </Link></li>
                </ul>
            </div>
        )
    }
}


export default Navbar;