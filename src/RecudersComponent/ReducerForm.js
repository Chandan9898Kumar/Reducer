import React, { useReducer } from "react";
const initialValue = {
    username: '',
    email: '',
    password: ''
};

// A common useReducer usage is to handle forms.
// Here's an example with two input fields, but you could imagine the same with many more fields.
const reducer = (state, action) => {

    // switch (action.type) {

    //     case 'username':
    //         return {username: action.payload }
    //     case 'email':
    //         return { email: action.payload }
    //     case 'password':
    //         return { password: action.payload }
    //     default:
    //         throw new Error(`Unknown action type: ${action.type}`);

    // }

    //    Bug in above code: if you console the state, below then you will only get separate values of
    //    username,email,password. they are not coming all together. so to solve this we can use
    //    spread operator

    // The bug is in the reducer: updating username will completely override the previous state 
    // and delete email (and updating email will do the same to username).

    // The way to solve this issue is to remember to keep all the previous state every time you update
    //  a property. This can be achieved easily with the spread syntax:



    //                       Solution

    switch (action.type) {
        case 'username':
            return { ...state, username: action.payload }
        case 'email':
            return { ...state, email: action.payload }
        case 'password':
            return { ...state, password: action.payload }
        default:
            throw new Error(`Unknown action type: ${action.type}`);

    }
}

const FormValidationWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    const HandleClick = (e) => {
        e.preventDefault()
       if(state.username){
        alert(
            `Name : ${state.username}`
        )
       }
       else{
        alert(
            `No Name provided`
        )
       }
    }
    return (
        <>
            <div>
                <form>
                    userName : <input
                        placeholder="type Name"
                        required="required"
                        type='text'
                        value={state.username}
                        onChange={(e) => dispatch({ type: 'username', payload: e.target.value })}
                    /><br /><br />
                    Email : <input
                        required="required"
                        placeholder="Type email"
                        type='email'
                        value={state.email}
                        onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
                    /><br /><br />
                    password : <input
                        placeholder="type password"
                        type='password'
                        required="required"
                        value={state.password}
                        onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
                    /><br /><br />
                    <button
                    type="submit"
                    onClick={HandleClick}
                    >Click</button>

                </form>
            </div>
        </>
    )
}
export default FormValidationWithReducer;