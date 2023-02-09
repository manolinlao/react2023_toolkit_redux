import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemonStore);
  console.log(pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const nextPokemons = () => {
    dispatch(getPokemons(page));
  };

  return (
    <>
      <h4>PokemonApp</h4>
      <hr />
      <span>Loading {isLoading ? 'True' : 'False'}</span>
      <br />
      {isLoading ? (
        <div></div>
      ) : (
        <div>
          <span>Page: {page}</span>
          <ul>
            {pokemons.map((pokemon) => {
              return <li key={pokemon.name}>{pokemon.name}</li>;
            })}
          </ul>
        </div>
      )}

      <button disabled={isLoading} onClick={nextPokemons}>
        Next
      </button>
    </>
  );
};
