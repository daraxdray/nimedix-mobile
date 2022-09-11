import create, {GetState, SetState} from 'zustand';

const useStore = create((set, get) => ({
  token: '',
  setToken: (token: string) => {
    set({token: token});
  },
}));

export default useStore;
