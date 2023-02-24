import React from 'react';
import { useContext } from 'react';
import { stateContext } from '../Context/stateContext';

const Content = () => {
    const {state} = useContext(stateContext);
    console.log(state);
  return (
    <div>
      Content
      {state.product.map((val, index) => (
        <div key={index}>
          <h1>{val.taskName}</h1>
          <h1>{val.taskDescription}</h1>
          {val.priority === "on" ? (
            <input type="checkbox" defaultChecked></input>
          ) : (
            <input type="checkbox"></input>
          )}isPriority<br />
          {val.complete === "on" ? (
            <input type="checkbox" defaultChecked></input>
          ) : (
            <input type="checkbox"></input>
          )}isCompleted
        </div>
      ))}
    </div>
  );
}

export default Content