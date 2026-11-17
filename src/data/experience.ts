export type ExperienceId = 'quimia' | 'tts';

export interface Experience {
  id: ExperienceId;
  year: string;
}

export const experience: readonly Experience[] = [
  { id: 'quimia', year: '2026' },
  { id: 'tts', year: '2026' },
];
