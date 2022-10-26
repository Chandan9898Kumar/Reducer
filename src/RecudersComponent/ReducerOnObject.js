import React, { useReducer } from "react";
const initialState = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
    {
        id: 3,
        title: "Todo 3",
        complete: false,
    },
    {
        id: 4,
        title: "Todo 4",
        complete: true,
    },
];


// the action is an object with one required property and one optional property:

//  1.    type : is the required property (analogous to the API endpoint). 
// It tells the reducer what piece of logic it should be using to modify the state.

//  2.   payload : is the optional property (analogous to the body of the HTTP POST request, if any). 
// It provides additional information to the reducer on how to modify the state.

const reducer = (state, action) => {
    if (action.type === 'complete') {
        return state.map((items) => {
            if (items.id === action.id) {
                return { ...items, complete: !items.complete }
            }
            else {
                return items
            }
        });
    }
}

//     with switch case 

// Reducers are usually structured with a switch statement on the action type, for example:

// const reducer = (state, action) => {
//     switch (action.type) {
//       case "complete":
//         return state.map((todo) => {
//           if (todo.id === action.id) {
//             return { ...todo, complete: !todo.complete };
//           } else {
//             return todo;
//           }
//         });
//       default:
//         return state;
//     }
//   };



const ReducerOnObjects = () => {
    const [todos, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            {todos.map((todo, index) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => dispatch({ type: 'complete', id: todo.id })}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    )
}
export default ReducerOnObjects;