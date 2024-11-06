import { combineReducers } from "redux";
import { dataPokemonReducer } from './dataPokemon.reducer'


const appReducer = combineReducers({
  dataPokemonReducer,
})

export const rootReducer = (state, action) => appReducer(state, action)
export default rootReducer  