import { ApplicationState } from "../types";
import * as Actions from "../actions/actions";
import { combineReducers } from "redux";

const initialState: ApplicationState = {
    counter: 0
};

export const counter = (
    state = initialState,
    action: Actions.Actions
): ApplicationState => {
    if (action.type === Actions.INCREMENT) {
        return {
            counter: state.counter + 1
        };
    } else if (action.type === Actions.DECREMENT) {
        return {
            counter: state.counter - 1
        };
    } else if (action.type === Actions.ADD) {
        return {
            counter: state.counter + action.payload.value
        };
    } else if (action.type === Actions.SUBTRACT) {
        return {
            counter: state.counter - action.payload.value
        };
    }

    return state;
};
