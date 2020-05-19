import { h } from "preact";

import style from "./CounterOutput.css";

interface CounterOutputProps {
    value: string;
}

const counterOutput = (props: CounterOutputProps) => (
    <div class={style.CounterOutput}>Current Counter: {props.value}</div>
);

export default counterOutput;
