import React,{useState} from "react";

function ToDoForm({addToDo}) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) {
            return;
        };
        addToDo(input);
        setInput("");
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="enter a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default ToDoForm;