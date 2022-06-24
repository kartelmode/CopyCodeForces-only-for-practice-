import { applyMiddleware} from "redux";
import { createStore } from '@reduxjs/toolkit';
import { rootReducer } from "./reducers";
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));