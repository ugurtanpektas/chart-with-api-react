import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userAction} from './../actions/userAction';
import {chartAction} from './../actions/chartAction';
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import { Chart } from "react-google-charts";

import config from "./../config";
import { generalAction } from "../actions/generalAction";
import Overlay from "./Overlay";

const options = {
    hAxis: { title: "Date"},
    vAxis: { title: "Temp. (Celsius)" }
  };

class Home extends React.Component{

    async componentDidMount(){
        this.props.chartAction('LOADING', true);
        const getWeatherCall = await fetch(config.apiUrl+'data/2.5/onecall?lat=52.520008&lon=13.404954&appid='+config.apiKey+'&units='+config.units+'&exclude=daily,minutely,daily,alerts');
        const response = await getWeatherCall.json();
        
        let setHourlyData = [[{type :'date', label:'Hour'}, 'Temp (C)', 'Feels Like']];
        response.hourly.forEach(wheaterElement => {
            let item = [new Date(wheaterElement.dt * 1000), wheaterElement.temp, wheaterElement.feels_like];
            setHourlyData.push(item);
        });
        this.props.chartAction('SET_HOURLY_DATA', setHourlyData);
        
    }

    render(){
        let chartHtml;
        if(this.props.chartState.loading){
             chartHtml = (
                 <div className="loading"> Loading...</div>
             )
        }
        else{
             chartHtml = (
                 <Chart
                     chartType="LineChart"
                     data={this.props.chartState.hourlyData}
                     options={options}
                     width="100%"
                     height="400px"
                     legendToggle
                     />
             )
        }
       return (
        <div className="App">   
            <Navbar />
            <Sidebar />
            <div className="main">
            <h1>Hourly Temp. in Berlin</h1>
            {chartHtml}
            </div>
            <Overlay />
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userState: state.users,
        chartState: state.charts,
        generalState: state.generals
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        userAction : userAction,
        chartAction : chartAction,
        generalAction : generalAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);