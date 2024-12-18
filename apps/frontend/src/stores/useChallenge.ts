import { create } from 'zustand';
import { ChallengeStore, UserChallengeStore } from './models';

interface StoreState {
  challenge: ChallengeStore;
  challenges: ChallengeStore[];
  userChallenges: UserChallengeStore[];
  setChallenge: (challenge: ChallengeStore) => void;
  setChallenges: (challenges: ChallengeStore[]) => void;
  setUserChallenges: (userChallenges: UserChallengeStore[]) => void;
}

const useChallenge = create<StoreState>((set) => ({
  challenge: {
    title: '',
    description: '',
    output_examples: '',
    output_answers: '',
    star_total: 0,
  },
  userChallenges: [],
  challenges: [],
  setUserChallenges: (userChallenges: UserChallengeStore[]) =>
    set({
      userChallenges,
    }),
  setChallenge: (challenge: ChallengeStore) => set({ challenge }),
  setChallenges: (challenges: ChallengeStore[]) => set({ challenges }),
}));

export { useChallenge };
