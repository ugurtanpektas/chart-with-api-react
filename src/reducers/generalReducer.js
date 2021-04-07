const initialState = {
    mobileMenuOpened:false
};

export default function generalReducer(state = initialState, action){
    switch(action.type){
        case 'TOGGLE_MOBILE_MENU':
            return {...state, mobileMenuOpened:!state.mobileMenuOpened};
        default:
            return state;
    }
}