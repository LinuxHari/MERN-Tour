import useTranslator from "../../../hooks/Others/useTranslator";
import "../../../assets/css/translator.css";

const Translator = () => {
  const {selectedLang, handleLanguageChange, languages} = useTranslator();

  return (
    <div
      style={{
        padding: "8px",
        fontSize: "14px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        marginBottom: "10px",
      }}
    >
      <select onChange={handleLanguageChange} value={selectedLang}>
        {/* <option value="" disabled>
          Select Language
        </option> */}
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      <div id="google_translate_element" style={{display: "none"}} />
    </div>
  );
};

export default Translator;
