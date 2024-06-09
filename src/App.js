import logo from './logo.svg';
import './App.css';
import { AddStudent } from './components/Addstudent';
import { SearchStudent } from './components/Searchstudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewStudent } from './components/ViewStudent';
import { Fisat } from './components/Fisat';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={(<Fisat/>)}/>
      <Route path='/add'element={(<AddStudent/>)}/>
      <Route path='search'element={(<SearchStudent/>)}/>
      <Route path='Viewall'element={(<ViewStudent/>)}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
