import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route>


          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
