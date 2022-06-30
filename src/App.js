import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/header/Header';
import UserRegister from './pages/RegisterPage/UserRegister';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/register' element={<UserRegister/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
