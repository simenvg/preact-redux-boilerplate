export type ActionTypes = "inc" | "dec" | "add" | "sub";

export type Actions = {
    type: ActionTypes;
    payload: {
        [key: string]: any;
    };
};

export const INCREMENT = "inc";
export const DECREMENT = "dec";
export const ADD = "add";
export const SUBTRACT = "sub";
