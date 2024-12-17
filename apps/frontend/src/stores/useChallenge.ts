import { create } from 'zustand';
import { ChallengeStore } from './models';

interface StoreState {
  challenge: ChallengeStore;
  challenges: ChallengeStore[];
  setChallenge: (challenge: ChallengeStore) => void;
  setChallenges: (challenges: ChallengeStore[]) => void;
}

const useChallenge = create<StoreState>((set) => ({
  challenge: {
    title: '',
    description: '',
    output_examples: '',
    output_answers: '',
    star_total: 0,
  },
  challenges: [],
  setChallenge: (challenge: ChallengeStore) => set({ challenge }),
  setChallenges: (challenges: ChallengeStore[]) => set({ challenges }),
}));

export { useChallenge };
