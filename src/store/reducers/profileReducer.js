const initialState = {
    loading: false,
    error: null,
    userInfo: []
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USER_INFO":
            return {loading: true, error: false, userInfo: []};
        case "FETCH_USER_INFO_SUCCESS":
            return {loading: false, error: false, userInfo: action.payload};
        case "FETCH_USER_INFO_ERROR": 
            return {loading: false, error: action.payload, userInfo: []};
        default:
            return state;
    }
}