import axios from 'axios';

export const InfiniteScrollAction = (items) => {
    return {
        type: "InfiniteScrollAction",
        items:items.data.items,
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

export const postData = (index,items) => {
  let bodyData= {
    items:items
  }
  return function(dispatch){
    axios.put(`http://localhost:8080/posts/${index}`,bodyData).then(res => {
        dispatch(InfiniteScrollAction(res))
    }).catch(error=>{
        dispatch(InfiniteScrollFailureAction())
    })
  }
}
