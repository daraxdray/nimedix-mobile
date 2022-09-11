import create from 'zustand';

const useStore = create((set, get) => ({
  token: '',
  setToken: (token: string) => {
    set({token: token});
  },
}));

export default useStore;
