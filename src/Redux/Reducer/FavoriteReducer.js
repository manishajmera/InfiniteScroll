const initialState = {
  items:[
  ],
}

const FavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FavoriteAction":
            return {
            ...state,
            items : action.items,
            }
        default: return state
    }
}
export default FavoriteReducer;
