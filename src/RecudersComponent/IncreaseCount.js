import React, { useReducer } from "react";
const initial_State = 0

// The useReducer Hook is similar to the useState Hook.

// It allows for custom state logic.

// If you find yourself keeping track of multiple pieces of state that rely on complex logic,
// useReducer may be useful.

const reducer = (state = initial_State, action) => {
    if (action.type === "add") {
        return state + 1
    }
    else if(action.type==='sub') {
        return state - 1
    }
    else{
        return state- state
    }
}

const StateChanges = () => {
    const [state, dispatch] = useReducer(reducer, initial_State)

    // Dispatch method used for triggering action and update state.

    // Reducer: This function takes the current state and an action as an arguments and returns the new
    // state depending on the action taken.
    return (
        <>
            <label>Your Count is  : {state }</label><br />
            <button
                onClick={() => dispatch({ type: 'add' })}
            >Add</button>
            <br /><br />
            <button
                onClick={() => dispatch({ type: 'sub' })}
            >Subtract</button>
            <br /><br />
            <button
                onClick={() => dispatch({ type: 'reset' })}
            >Reset</button>
        </>
    )
}
export default StateChanges;