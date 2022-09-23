import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './App'

import {
  BrowserRouter
} from "react-router-dom";
<<<<<<< HEAD
import AuthContextProvider from './contexts/AuthContext';
=======
>>>>>>> c191cf8b7c8c27d75ccd11793d877989a0207006


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
<<<<<<< HEAD
      <AuthContextProvider>
            <App/>
      </AuthContextProvider>
=======
        <App/>
>>>>>>> c191cf8b7c8c27d75ccd11793d877989a0207006
    </BrowserRouter>
)

