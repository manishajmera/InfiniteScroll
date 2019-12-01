'use strict';
import React from 'react';
import test from '../test';
import { connect } from 'react-redux';

const defaultProps = {
    ctaClass:"primaryButton"
};

class InfiniteScroll extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.setState(nextProps);
    }
    render(){
      let items = this.props.items;
      let listItems = (items) => {
        let listOfItems = [];
        items.map((item,index)=>{
            listOfItems.push(
                <li key={index}>
                    <h2>{item.heading}</h2>
                    <p>{item.title}</p>
                      <p>{item.title}</p>
                        <p>{item.title}</p>
                    <span>{item.favFlag}</span>
                </li>
            )
        })
        console.log(listOfItems);
        return listOfItems;
      }
        return(
          <ul>
            {listItems(items)};
          </ul>
        );
    }
}
const mapStateToProps = state => {
  console.log(state);
    return {
        items:state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // InfiniteScrollAction : (formData)=>dispatch(InfiniteScrollAction(formData))
    }
}
// PersonalDetail.defaultProps = defaultProps;
export default connect(mapStateToProps,mapDispatchToProps)(InfiniteScroll);
InfiniteScroll.defaultProps = defaultProps;
