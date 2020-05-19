import { ApplicationState } from "../types";
import { Actions } from "../actions/actions";
import { combineReducers } from "redux";

const initialState: ApplicationState = {
    counter: 0
};

export const counter = (
    state = initialState,
    action: Actions
): ApplicationState => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        };
    } else if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        };
    } else if (action.type === "ADD") {
        return {
            counter: state.counter + action.payload.value
        };
    } else if (action.type === "SUBTRACT") {
        return {
            counter: state.counter - action.payload.value
        };
    }

    return state;
};
