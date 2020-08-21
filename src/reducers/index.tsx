import {CombinedState, combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'

const rootReducer: CombinedState<any> = combineReducers({
    form: formReducer,
    });

export default rootReducer;
