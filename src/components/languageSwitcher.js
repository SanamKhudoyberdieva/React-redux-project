import { appLocales } from "./intl";

export default function LanguageSwitcher({ locale, setLocale }) {
    const handleLanguageChange = (e) => {
        setLocale(e.target.value);
    };

    return (
        <select value={locale} onChange={handleLanguageChange}>
            {appLocales.map((language) => (
                <option key={language} value={language}>
                    {language}
                </option>
            ))}
        </select>
    );
}