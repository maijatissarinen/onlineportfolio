// Picks the text for the current language from an { en: ..., fi: ... } object.
// Falls back to English when the other language is missing or empty.
export function localize(value, language) {
    const lang = language?.slice(0, 2);
    const text = value[lang];
    const isEmpty = text === undefined || text === "" || (Array.isArray(text) && text.length === 0);
    return isEmpty ? value.en : text;
}
