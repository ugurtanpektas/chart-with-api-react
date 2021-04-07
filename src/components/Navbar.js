import React from "react";
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
            <div className="top-header">
                <div>Chart Dashboard</div>
                <div>
                    <Link to="/login"> Logout</Link>
                </div>
            </div>
        )
    }
}


export default Navbar;