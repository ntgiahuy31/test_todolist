import React from "react";
import {v4 as uuid4} from "uuid";

const Form = ({ input, setInput, todos, setTodos}) => {

 const onInputChange = (event) => {
    setInput(event.target.value);
    
 };
 const onFormSubmit = (event) => {
    event.preventDefault ();
    setTodos([...todos, { id: uuid4(), title: input, completed: false}]);
    
 }
 
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter" className="task-input" value={input} required onChange={onInputChange} ></input>
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    )
}

export default Form