import usei18nContext from '../../../contexts/i18nContext';
import { useContext } from "react";

export default function Submit() {
  const { t } = useContext(usei18nContext);

  return (
    <button type="submit">{t("submit")}</button>
  )
}
