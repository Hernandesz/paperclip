import { useState } from "react";
import { savedUiLanguage, saveUiLanguage, uiText, type UiLanguage } from "./ui-language";
import { hasPendingWrites } from "@/lib/reload-safety";

export function UiLanguageSelect() {
  const [language, setLanguage] = useState(savedUiLanguage);
  return <label className="flex items-center justify-between gap-2 px-2.5 py-2 text-sm">
    {language === "es" ? "Idioma" : "Language"}
    <select aria-label={language === "es" ? "Idioma" : "Language"} className="rounded-md border border-border bg-background px-2 py-1" value={language} onChange={(event) => {
      const next = event.target.value as UiLanguage;
      if (hasPendingWrites()) { window.alert(language === "es" ? "Espera a que se guarden los cambios." : "Wait until pending changes are saved."); return; }
      try { saveUiLanguage(next); setLanguage(next); window.location.reload(); } catch { window.alert(uiText("Could not save language preference.")); }
    }}><option value="en">English</option><option value="es">Español</option></select>
  </label>;
}
