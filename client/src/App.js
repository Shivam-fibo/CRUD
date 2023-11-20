
import './App.css';
import NavBar from './components/NavBar';

import Crudoperation from './components/Crudoperation';

import AddUsers  from './components/AddUser'
import AllUsers from './components/AllUsers';

// url based  routing
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>  
    <Route  path ='/' element= {< Crudoperation />} />
    <Route  path = '/add' element =   {<AddUsers/>} />
    <Route  path='/all' element = { <AllUsers/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
