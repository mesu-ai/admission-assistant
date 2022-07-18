import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/header/Header';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Layout from './layouts/Layout';

function App() {
  const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(localStorage.getItem('language'));
	}, [i18n]);

  return (
    <Layout/>
  );
}

export default App;
