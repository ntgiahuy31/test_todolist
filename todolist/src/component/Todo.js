import React, { useState } from "react";

const TodoList = ({todos, setTodos}) => {

    const [status, setStatus] = useState(1);

    const handleComplete = (todo) => {
        setTodos (
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed};
                }
                return item;
            })
        )
    }
    const handleDelele = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));

    }

    return (
        <div>
            <div className="status" >
                <button onClick={ () => {setStatus(1)}}>ALL</button>
                <button onClick={ () => {setStatus(2)}}>ACTIVE</button>
                <button onClick={ () => {setStatus(3)}}>COMPLETED</button>
            </div>
            {todos.filter( item => {
                if (status === 1) return true;
                if (status === 2 && item.completed === false) {
                    return true
                }

                if (status === 3 && item.completed) {
                    return true;
                }
                return false;
            }).map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input type="text" value={todo.title}  className={`list ${todo.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()}  ></input>
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        
                        <button className="button-delete task-button" onClick={() => handleDelele(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </div>    
                </li>
            ) )}
        </div>
    )
}

export default TodoList;