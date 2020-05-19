import { FunctionalComponent, h } from "preact";
// import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Counter from "../containers/Counter/Counter";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}
import { Provider } from "react-redux";
import configureStore from "../store";

const store = configureStore();

const App: FunctionalComponent = () => {
    return (
        <Provider store={store}>
            <div id="app">
                <Counter />
            </div>
        </Provider>
    );
};

export default App;
