export type ProofId = 'tests' | 'steps' | 'channels' | 'screens' | 'lockout';

export interface Proof {
  id: ProofId;
  value: number;
  suffix: string;
}

export const proofs: readonly Proof[] = [
  { id: 'tests', value: 160, suffix: '+' },
  { id: 'steps', value: 7, suffix: '' },
  { id: 'channels', value: 8, suffix: '' },
  { id: 'screens', value: 11, suffix: '' },
  { id: 'lockout', value: 5, suffix: '' },
];
