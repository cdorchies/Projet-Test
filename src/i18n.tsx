import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          home: "Home Page",
          contact: "Contact us",
          submit: "Send",
          company: "Cleaning company, since 2023",
          titleAbout: "About ...",
          subTitleAbout: "Society ...",
          descriptionAbout: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa risus, vestibulum eget mauris nec, dapibus tincidunt sem. Integer faucibus lorem et orci sollicitudin, nec porta nunc eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vitae malesuada elit. Morbi imperdiet id elit vitae tristique. Quisque commodo sapien quis tempus scelerisque. Nam venenatis sed sem sed ultricies. Sed luctus porta nisi. Morbi aliquet porta turpis vitae pharetra. Morbi in enim sed ex blandit placerat. Etiam tempor pulvinar tristique. Curabitur elementum felis lobortis nunc ultrices, fermentum vestibulum metus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a blandit dolor, consequat ultrices nibh. Phasellus euismod erat quis pretium tempor.",
        },
      },
      fr: {
        translation: {
          home: "Page d'accueil",
          contact: "Contactez nous",
          submit: "Envoyer",
          company: "Société de nettoyage, depuis 2023",
          titleAbout: "À propos de ...",
          subTitleAbout: "La société ...",
          descriptionAbout: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa risus, vestibulum eget mauris nec, dapibus tincidunt sem. Integer faucibus lorem et orci sollicitudin, nec porta nunc eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vitae malesuada elit. Morbi imperdiet id elit vitae tristique. Quisque commodo sapien quis tempus scelerisque. Nam venenatis sed sem sed ultricies. Sed luctus porta nisi. Morbi aliquet porta turpis vitae pharetra. Morbi in enim sed ex blandit placerat. Etiam tempor pulvinar tristique. Curabitur elementum felis lobortis nunc ultrices, fermentum vestibulum metus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a blandit dolor, consequat ultrices nibh. Phasellus euismod erat quis pretium tempor.",
        },
      },
    },
  });