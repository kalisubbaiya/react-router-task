import { useState, useContext } from "react"
import React from 'react'
import Header from "../Header/Header";
import './Task.css'
import { stateContext } from "../Context/stateContext";

const Task = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [priority, setPriority] = useState(false);
    const [complete, setComplete] = useState(false);

    const {state, dispatch} = useContext(stateContext);
    console.log(state);

    const handleSubmit = (e) =>{
        e.preventDefault();
        let task = [];
        if (state.product.length > 0){
          task = [...state.product, {taskName, taskDescription, priority, complete}]
        }
        else{
          task = [{taskName, taskDescription, priority, complete}]
        }
        dispatch({
          type: "ADD_TASK",
          payload: task,
        })
      
        e.target.name.value=""
        e.target.description.value=""
        e.target.isPriority.checked=""
        e.target.isComplete.checked=""

    }


  return (
    <div>
      <Header />
      <div className="row1">
        <form onSubmit={handleSubmit}>
          <h1>Task Name</h1>
          <input
            type="text"
            name="name"
            placeholder="Task Name"
            className="width"
            onChange={(e) => setTaskName(e.target.value)}
          />
          <h1>Task Description</h1>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="width"
            onChange={(e) => setTaskDescription(e.target.value)}
          />{" "}
          <br />
          <input
            type="checkbox"
            name="isPriority"
            id="priority"
            onChange={(e) => setPriority(e.target.value)}
          />{" "}<label for="priority">isPriority</label>{" "}
          <input
            type="checkbox"
            name="isComplete"
            id="complete"
            onChange={(e) => setComplete(e.target.value)}
          />{" "}<label for="complete">isCompleted</label>
          <div className="btn">
            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Task