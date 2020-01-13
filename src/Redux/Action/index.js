import axios from 'axios';

export const InfiniteScrollAction = (items) => {
    return {
        type: "InfiniteScrollAction",
        items:items.data.items,
    }
}
export const FavoriteAction = (items) => {
  return {
      type: "FavoriteAction",
      items:items.data,
  }
}

export const startLoader = () => {
  return{
    type: "StartLoader",
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

export const fetchAllData = (index) => {
  return function(dispatch){
    axios.get(`http://localhost:8080/posts`).then(res => {
        dispatch(FavoriteAction(res))
    }).catch(error=>{
    })
  }
}

export const postData = (page,items) => {
  let bodyData= {
    id:page,
    items:items
  }

  return function(dispatch){
    axios.put(`http://localhost:8080/posts/${page}`,bodyData).then(res => {
        dispatch(InfiniteScrollAction(res))
    }).catch(error=>{
        dispatch(InfiniteScrollFailureAction())
    })
  }
}
