import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate, Outlet, BrowserRouter, HashRouter } from 'react-router-dom';
import { useState } from "react";
import Home from './routes/Home.jsx';
import Result from './routes/Result.jsx';


function App() {
  let [InputText, setInputText] = useState("");
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home InputText={InputText} setInputText={setInputText} />} />
          <Route path='/result' element={<Result InputText={InputText} setInputText={setInputText}/>} />
        </Routes>

      </HashRouter>

    </div>

  );
}


export default App;
