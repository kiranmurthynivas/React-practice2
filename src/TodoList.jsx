import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {

    let [todos, setTodos] = useState([{task: "smaple-task", id: uuidv4() , isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo , id: uuidv4(), isDone:false}];
        });
        setNewTodo("");
    }
    

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
    setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
        });
    }

   let upperCaseAll = () => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            return { ...todo, task: todo.task.toLocaleUpperCase() };
        });
    });
};
    
    let upperCaseOne = (id) => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: todo.task.toUpperCase() };
            } else {
                return todo;
            }
        });
    });
};

let markAsDOne = (id) => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone:true };
            } else {
                return todo;
            }
        });
    })
}

let markAllAsDone = () => {
    setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
            return { ...todo, isDone:true };
        });
    });
};

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask} >Add Task</button>
            <br></br> <br></br> <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            {
                todos.map((todo) => {
                    return <li key={todo.id}>
                                <span style={ todo.isDone ? {textDecorationLine: "line-through"}: {}}>{todo.task}</span>
                                &nbsp;  &nbsp;  &nbsp;
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                &nbsp;  &nbsp;  &nbsp;
                                <button onClick={() => upperCaseOne(todo.id)}>Upper Case One</button>
                                &nbsp;  &nbsp;  &nbsp;
                                <button onClick={() => markAsDOne(todo.id)}>Mark as done</button>
                            </li>;
                })
            }
            <br></br>
            <button onClick={upperCaseAll}>Upper Case All</button>
            &nbsp;  &nbsp;  &nbsp;
            <button onClick={markAllAsDone}>Mark All as Done</button>
        </div>
    )
}