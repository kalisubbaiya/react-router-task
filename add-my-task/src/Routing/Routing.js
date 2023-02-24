import React, {useReducer} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../Login/Login';
import Task from '../Task/Task';
import Content from '../Content/Content';
import { stateContext } from '../Context/stateContext';
import { initialState, stateReducer } from '../Context/stateReducer';

const Routing = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState)
  return (
    <stateContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
          <Routes>
              <Route path='*' element={<Login />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/task' element={<Task />}></Route>
              <Route path='/content' element={<Content />}></Route>
          </Routes>
      </BrowserRouter>
    </stateContext.Provider>
  )
}

export default Routing