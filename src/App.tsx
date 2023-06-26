import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18nContext from './contexts/i18nContext';
import Header from './components/templates/header';
import Home from './pages/home';
import Contact from './pages/contact';
import './App.scss';

export interface i18nContextValues {
  lngs: {
    [key: string]: {
      nativeName: string;
    }
  };
  t: (key: string) => string;
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
}

function App() {
  const lngs = {
    en: { nativeName: "English" },
    fr: { nativeName: "Français" },
  };
  
  const { t, i18n } = useTranslation();

  return (
    <i18nContext.Provider value={{ lngs, t, i18n }}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </i18nContext.Provider>
  )
}

export default App;
