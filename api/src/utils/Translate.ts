import { LangCode, getTranslationText, languageList } from 'lingva-scraper';

const s = languageList.source;
const t = languageList.target;

type TSource = typeof s
type TTarget = typeof t

async function getTranslation(source: keyof TSource, target: keyof TTarget, text: string): Promise<string | null> {
  const translation = await getTranslationText(source as LangCode<'source'>, target as LangCode<"target">, text);
  return translation;
}

export const TranslateUtils = {
  getTranslation
}
