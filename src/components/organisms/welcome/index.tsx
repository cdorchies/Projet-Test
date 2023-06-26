import usei18nContext from '../../../contexts/i18nContext';
import { useContext } from "react";
import './index.scss';

export default function welcomePart() {
  const { t } = useContext(usei18nContext);

  return (
    <div className="welcome_part">
      <div className="entreprise">
        <h1>Nom de l'entreprise</h1>
        <h2>{t("company")}</h2>
      </div>
    </div>
  )
}
