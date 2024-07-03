import { LayoutLanguage } from "models/common";

export function getLanguageId(languageCode: string | null): number {
    switch (languageCode) {
      case LayoutLanguage.Azerbaijani:
        return 1;
      case LayoutLanguage.English:
        return 2;
      case LayoutLanguage.German:
        return 3;
      default:
        throw new Error('Invalid language code');
    }
  }