import { h, Component } from "preact";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { ApplicationState } from "../../store/types";
import { Actions } from "../../store/actions/actions";

interface CounterState {
    counter: number;
}

export interface AppProps {
    dispatch: (action: Actions) => void;
    ctr: number;
}

class Counter extends Component<AppProps> {
    counterChangedHandler = (action: string, value: number): void => {
        switch (action) {
            case "inc":
                this.setState((prevState: CounterState) => {
                    return { counter: prevState.counter + value };
                });
                break;
            case "dec":
                this.setState((prevState: CounterState) => {
                    return { counter: prevState.counter - value };
                });
                break;
            case "add":
                this.setState((prevState: CounterState) => {
                    return { counter: prevState.counter + value };
                });
                break;
            case "sub":
                this.setState((prevState: CounterState) => {
                    return { counter: prevState.counter - value };
                });
                break;
        }
    };

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr.toString()} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecremetnCounter}
                />
                <CounterControl
                    label="Add 5"
                    clicked={this.props.onAddCounter}
                />
                <CounterControl
                    label="Subtract 5"
                    clicked={this.props.onSubtractCounter}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        ctr: state.counter.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecremetnCounter: () => dispatch({ type: "DECREMENT" }),
        onAddCounter: () => dispatch({ type: "ADD", payload: { value: 4 } }),
        onSubtractCounter: () =>
            dispatch({ type: "SUBTRACT", payload: { value: 5 } })
    };
};

// export default connect(mapStateToProps)(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
