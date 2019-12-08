'use strict';
import React from 'react';
import { connect } from 'react-redux';
import store from '../Redux/store';
import {fetchAllData} from '../Redux/Action';

store.dispatch(fetchAllData());

export const Favorites = (props) => {
  console.log(props);
  let container = () => {
    let h = [];
    let index = 0;
    for(let i in props.items){
      for(let j in props.items[i].items){
        index++;
        if(props.items[i].items[j].favFlag){
          h.push(
            <li>
              <p>{`${index} ${props.items[i].items[j].title}`}</p>
            </li>
          )
        }
      }
    }
    return h;
  }
  return(
    <div>
      <h1>List of all the favorites</h1>
      <ul>
        {container()}
      </ul>
    </div>
  );

}

const mapStateToProps = state => {
    console.log(state);
    return {
        items:state.favoriteData.items,
    }
}
export default connect(mapStateToProps)(Favorites);
