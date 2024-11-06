import { actionTypes } from "../actiontypes";

const initialState = {
    PokemonList :[],
    loading :false,
    error:null
}

export const dataPokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_REQUEST:
            return { 
                ...state, 
                loading: true 
            };
        case actionTypes.GET_DATA_POKEMON_SUCCESS:
            return { 
                ...state,
                PokemonList: action.payload,
                loading: false,
            };
        case actionTypes.GET_DATA_POKEMON_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
