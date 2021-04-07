const initialState = {
    email:null,
    isLoggedIn : false,
    loading:true
};

export default function userReducer(state = initialState, action){
    switch(action.type){
        case 'LOADING':
            return {...state, loading:true};
        case 'SET_EMAIL':
            return {...state, loading:false, email:action.payload};
        case 'SET_LOGGED_IN':
            return {...state, loading:false, isLoggedIn:action.payload};
        default:
            return state;
    }
}