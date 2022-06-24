import axios from 'axios';
import { Dispatch } from 'redux';

export default function fetchUserInfo({urlAPI, nickname}) {
    return async (dispatch) => {
        try {
            dispatch({type: "FETCH_USER_INFO"});
            let response = await axios.get(urlAPI);
            dispatch({type: "FETCH_USER_INFO_SUCCESS", payload: response.data.result[0]})
        } catch (e) {
            dispatch({
                type: "FETCH_USER_INFO_ERROR", 
                payload: "Пользователя с никнеймом" + {nickname} + "не существует"
            });
        }
    }
}
