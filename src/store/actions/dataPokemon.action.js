import axios from "axios";
import { actionTypes } from "../actiontypes";

const URL_API_POKEMON = "https://pokeapi.co/api/v2/pokemon";

export function fetchDataPokemon() {
  return async (dispatch) => {
    dispatch({ type: actionTypes.GET_DATA_POKEMON_REQUEST });
    try {
      const response = await axios.get(URL_API_POKEMON);
      const results = response.data.results;
      const detailedPokemonData = await Promise.all(
        results.map(async (results) => {
          const detailResponse = await axios.get(results.url);
          return {
            name: detailResponse.data.name.toUpperCase(),
            abilities: detailResponse.data.abilities.map(
              (ability) => ability.ability.name.toUpperCase()
            ),
            imageUrl: detailResponse.data.sprites.front_default,
          };
        })
      );
      console.log("Detailed Pokémon data:", detailedPokemonData);
      dispatch({
        type: actionTypes.GET_DATA_POKEMON_SUCCESS,
        payload: detailedPokemonData,
      });
    } catch (error) {
      console.log("Error:", error);
      dispatch({
        type: actionTypes.GET_DATA_POKEMON_FAILED,
        payload: error.message,
      });
    }
  };
}
