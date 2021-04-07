import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userAction} from './../actions/userAction';
import {chartAction} from './../actions/chartAction';
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import { Chart } from "react-google-charts";

import config from "./../config";

const options = {
    hAxis: { title: "Date"},
    vAxis: { title: "Temp. (Celcius)" }
  };

class Home extends React.Component{

    async componentDidMount(){
        this.props.chartAction('LOADING', true);
        const getWeatherCall = await fetch(config.apiUrl+'data/2.5/forecast?q='+config.city+'&appid='+config.apiKey+'&units='+config.units);
        const response = await getWeatherCall.json();
        let setDailyData = [[{type :'date', label:'Day'}, 'Temp (C)']];
        response.list.forEach(wheaterElement => {
            let item = [new Date(wheaterElement.dt * 1000), wheaterElement.main.temp];
            setDailyData.push(item);
        });
        this.props.chartAction('SET_DAILY_DATA', setDailyData);
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
                    data={this.props.chartState.dailyData}
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
                    <h1>Daily Temp. in Berlin</h1>
                    {chartHtml}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userState: state.users,
        chartState: state.charts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        userAction : userAction,
        chartAction : chartAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);