import React,{useState} from "react";
import './App.css';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function App() {
  const [toDos, setToDos] = useState([]);
  
  const addToDo = (text) => {
    const newToDo = {id: Date.now(), text, completed: false};
    setToDos([...toDos, newToDo]);
  };

  const toggleComplete = (id) => {
    setToDos(
      toDos.map((toDo) => 
        toDo.id === id ? {...toDo, completed: !toDo.completed} : toDo
      )
    );
  };

  const removeToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <div className="App">
      <h1>sample todo app</h1>
      <ToDoForm addToDo={addToDo}/>
      <ToDoList toDos = {toDos} toggleComplete={toggleComplete} removeToDo={removeToDo}/>
    </div>
  );
}

export default App;
