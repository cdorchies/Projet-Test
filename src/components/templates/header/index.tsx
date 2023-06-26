import usei18nContext from '../../../contexts/i18nContext';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from "react";
import './index.scss';

export default function Header() {
  const { lngs, t, i18n } = useContext(usei18nContext);
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabClick = (tabName : string) => {
    setActiveTab(tabName);
  };

  return (
    <header>
      <nav>
        <div>
          {Object.keys(lngs).map((lng) => {
            return (
              <button
                type="submit"
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                disabled={i18n.language === lng}
              >
                {lngs[lng].nativeName}
              </button>
            );
          })}
        </div>
        <ul>
          <li className={activeTab === 'home' ? 'active' : ''} onClick={() => handleTabClick('home')}>
            <NavLink to='/'>
              {t("home")}
            </NavLink>
            </li>
          <li className={activeTab === 'about' ? 'active' : ''} onClick={() => handleTabClick('about')}>
            <NavLink to='/contact'>
              {t("contact")}
            </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}

