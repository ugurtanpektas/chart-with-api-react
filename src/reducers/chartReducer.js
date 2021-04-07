const initialState = {
    hourlyData:[],
    dailyData:[],
    loading:true
};

export default function chartReducer(state = initialState, action){
    switch(action.type){
        case 'LOADING':
            return {...state, loading:true};
        case 'SET_DAILY_DATA':
            return {...state, loading:false, dailyData:action.payload};
        case 'SET_HOURLY_DATA':
            return {...state, loading:false, hourlyData:action.payload};
        default:
            return state;
    }
}