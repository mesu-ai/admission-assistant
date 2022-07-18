import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/header/Header';
import UserRegister from './pages/RegisterPage/UserRegister';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(localStorage.getItem('language'));
	}, [i18n]);

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
