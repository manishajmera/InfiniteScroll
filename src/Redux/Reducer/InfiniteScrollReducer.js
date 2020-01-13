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
            return {
            ...state,
            items : items,
            currentPage:state.currentPage+1,
            failure:false,
            loader:false
            }
          case "InfiniteScrollFailureAction":
            return {
              ...state,
              failure:action.failure,
              loader:false
            }
          case "StartLoader":
          return {
            ...state,
            loader:true,
          }
        default: return state
    }
}
export default InfiniteScrollReducer;
