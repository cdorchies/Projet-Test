import usei18nContext from '../../../contexts/i18nContext';
import { useContext } from "react";
import './index.scss';

export default function Presentation() {
  const { t } = useContext(usei18nContext);
  
  return (
    <div className="presentation_part">
      <div>
        <img src="src/assets/img/3802332.jpg" alt="" className="img-about" />
      </div>
      <div>
        <h2>{t("titleAbout")}</h2>
        <h3>{t("subTitleAbout")}</h3>
        <p>{t("descriptionAbout")}</p>
      </div>
    </div>
  )
}
