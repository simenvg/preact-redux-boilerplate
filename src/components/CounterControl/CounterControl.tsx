import { h } from "preact";

import style from "./CounterControl.css";

interface CounterControlProps {
    clicked: () => void;
    label: string;
}

const counterControl = (props: CounterControlProps) => (
    <div class={style.CounterControl} onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;
