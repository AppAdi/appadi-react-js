import create from "zustand";
import axios from "axios";

const initialState = {
    pokemons : [],
};

const useStore = create((set) => ({
    ...initialState,
    getPokemons: async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=28');
      set(()=>({pokemons : data.results}));
    },
}));

export default useStore;