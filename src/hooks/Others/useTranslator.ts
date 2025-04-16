import {useEffect, useRef, useState} from "react";

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            autoDisplay?: boolean;
          },
          containerId: string,
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const useTranslator = () => {
  const languages = [
    {name: "English", code: "en"},
    {name: "Tamil", code: "ta"},
    {name: "Arabic", code: "ar"},
    {name: "Spanish", code: "es"},
    {name: "French", code: "fr"},
    {name: "German", code: "de"},
    {name: "Russian", code: "ru"},
    {name: "Chinese", code: "zh-CN"},
    {name: "Japanese", code: "ja"},
    {name: "Portuguese", code: "pt"},
  ];

  const translatorInitialized = useRef(false);
  const [selectedLang, setSelectedLang] = useState(languages[0].code);

  const googleTranslateElementInit = () => {
    if (window.google?.translate?.TranslateElement) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    }
  };

  useEffect(() => {
    if (!translatorInitialized.current) {
      const script = document.createElement("script");

      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      window.googleTranslateElementInit = googleTranslateElementInit;
      translatorInitialized.current = true;
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;

    setSelectedLang(lang);

    const interval = setInterval(() => {
      const googleCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;

      if (googleCombo) {
        if (googleCombo.value !== lang) {
          googleCombo.value = lang;
          googleCombo.dispatchEvent(new Event("change"));
        }
        clearInterval(interval);
      }
    }, 200);
  };

  return {languages, selectedLang, handleLanguageChange};
};

export default useTranslator;
