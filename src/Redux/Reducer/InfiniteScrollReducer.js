const initialState = {
  items:[
  ],
  currentPage:0,
  failure:false
}

const InfiniteScrollReducer = (state = initialState, action) => {
    switch (action.type) {
        case "InfiniteScrollAction":
            let {items} = state;
            items = [...items,...action.items];
            let endOfinfinteScroll = action.items.hasOwnProperty("title");
            return {
            ...state,
            items : items,
            currentPage:state.currentPage+1,
            failure:false
            }
          case "InfiniteScrollFailureAction":
          return {
            ...state,
            failure:action.failure
          }
        default: return state
    }
}
export default InfiniteScrollReducer;
