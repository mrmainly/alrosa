import React, { useReducer } from 'react';

import { Route, BrowserRouter, Routes } from "react-router-dom";

import { DispatchContext, StateContext, defaultStore } from './store'
import { stateReducer } from './reducer'
import { AuthProvider } from './context/AuthContext';

import { Chat, SignIn, SignUp, Calendar, Team, Employees, MyTasks, Settings } from './pages';
import Layout from './layout'

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, defaultStore)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Chat />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/team" element={<Team />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/my-tasks" element={<MyTasks />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
