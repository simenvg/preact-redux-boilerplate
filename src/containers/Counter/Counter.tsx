import { h, Component } from "preact";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { ApplicationState } from "../../store/types";
import * as Actions from "../../store/actions/actions";
import { AppState } from "../../store";

interface CounterState {
    counter: number;
}

export interface AppProps {
    dispatch: (action: Actions.Actions) => void;
    ctr: number;
    onIncrementCounter: () => void;
    onDecrementCounter: () => void;
    onAddCounter: () => void;
    onSubtractCounter: () => void;
}

class Counter extends Component<AppProps, CounterState> {
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
                    clicked={this.props.onDecrementCounter}
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

const mapStateToProps = (state: AppState) => {
    return {
        ctr: state.counter.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: Actions.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: Actions.DECREMENT }),
        onAddCounter: () =>
            dispatch({ type: Actions.ADD, payload: { value: 5 } }),
        onSubtractCounter: () =>
            dispatch({ type: Actions.SUBTRACT, payload: { value: 5 } })
    };
};

// export default connect(mapStateToProps)(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
