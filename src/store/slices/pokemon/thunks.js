import { pokemonApi } from '../../../api/pokemonApi';
import { startLoadingPokemons, setPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  console.log(page);

  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // Petición http - usando fetch
    // const query = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;
    // const resp = await fetch(query);
    // const data = await resp.json();
    // console.log(data);

    // Petición http - usando axios
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

    // dispatch(setPokemons())
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
