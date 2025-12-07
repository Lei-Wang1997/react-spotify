import type { Languages } from '../interfaces/languages';

export const AVAILABLE_LANGUAGES = [
  { value: 'en', label: 'English', englishLabel: 'English' },
  {
    value: 'vi',
    label: 'Vietnam',
    englishLabel: 'Vietnam',
  },
] as {
  label: string;
  value: Languages;
  englishLabel: string;
}[];
