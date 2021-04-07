import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userAction} from './../actions/userAction';
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import { Chart } from "react-google-charts";

const options = {
    hAxis: { title: "Date", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Degree (Celcius)", viewWindow: { min: 0, max: 35 } }
  };
  const data = [
    ["x", "Degree"],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7]
  ];

class Home extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
            <div className="App">   
                <Navbar />
                <Sidebar />
                <div class="main">
                <h1>Daily</h1>
                <Chart
                    chartType="LineChart"
                    data={data}
                    options={options}
                    width="100%"
                    height="400px"
                    legendToggle
                    />
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