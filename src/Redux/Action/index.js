import axios from 'axios';

export const InfiniteScrollAction = (items) => {
    return {
        type: "InfiniteScrollAction",
        items:items.data.items
    }
}

export const InfiniteScrollFailureAction = () => {
    return {
        type: "InfiniteScrollFailureAction",
        failure:true
    }
}

export const fetchData = (index=1) => {
  return function(dispatch){
    axios.get(`http://localhost:8080/posts/${index}`).then(res => {
        dispatch(InfiniteScrollAction(res))
    }).catch(error=>{
        dispatch(InfiniteScrollFailureAction())
    })
  }
}
