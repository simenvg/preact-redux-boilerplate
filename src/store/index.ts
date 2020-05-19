import { counter } from "./reducers/reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counter
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(rootReducer);
    return store;
}
