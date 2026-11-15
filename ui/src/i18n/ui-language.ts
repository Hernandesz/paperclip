import translations from "./ui-es.json";

export type UiLanguage = "en" | "es";
const storageKey = "paperclip.sicaev.ui-language";
export function savedUiLanguage(): UiLanguage {
  try { return typeof window !== "undefined" && window.localStorage.getItem(storageKey) === "es" ? "es" : "en"; } catch { return "en"; }
}
export function uiText(english: string): string {
  return savedUiLanguage() === "es" ? (translations as Record<string, string>)[english] ?? english : english;
}
export function saveUiLanguage(language: UiLanguage): void {
  window.localStorage.setItem(storageKey, language);
}
