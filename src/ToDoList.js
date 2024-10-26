import React from "react";

function ToDoList({toDos, toggleComplete, removeToDo}) {
    return (
        <ul>
            {toDos.map(toDo => (
                <li 
                key={toDo.id}
                >
                    <span 
                    onClick={() => toggleComplete(toDo.id)}
                    style={{
                        textDecoration: toDo.completed ? "line-through" : "none", 
                        color: toDo.completed ? "darkgray" : "black"
                        }}
                    >{toDo.text}</span>
                    <button onClick={() => removeToDo(toDo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;