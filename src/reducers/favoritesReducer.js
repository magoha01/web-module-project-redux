import { ADD_FAVORITES, DELETE_FAVORITES, TOGGLE_FAVORITES } from '../actions/favoritesActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_FAVORITES:

            return {
                ...state, 
                favorites: [...state.favorites, action.payload]
            }
        case DELETE_FAVORITES:
            return {
                ...state, 
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case TOGGLE_FAVORITES:
            return {
                ...state, 
                displayFavorites: !state.displayFavorites
            }

        default:
            return (state);
    }
}

export default favoritesReducer;