'use strict';
import React from 'react';
import { connect } from 'react-redux';
import store from '../Redux/store';
import {fetchData,postData,startLoader} from '../Redux/Action';
store.dispatch(fetchData());

const defaultProps = {
    ctaClass:"primaryButton",
    currentPage: 1,
};

class InfiniteScroll extends React.Component{
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.isInViewport = this.isInViewport.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll",this.handleScroll);
    }

    handleScroll(){
      if (!this.props.failure && this.isInViewport() && !this.state.loader) {
        store.dispatch(startLoader())
        let {currentPage} = this.props;
        store.dispatch(fetchData(currentPage+1));
      }
    }

    handleClick(index){
      let {items} = this.props;
      let page = parseInt(index/10)+1;
      items[index].favFlag = true;
      store.dispatch(postData(page,items.slice((page-1)*10,page*10)))
    }

    isInViewport(offset = 0) {
      let lastItem = `item-${this.props.currentPage*9}`;
      if(this.refs[lastItem]){
        const top = this.refs[lastItem].getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
      }else {
        return false;
      }

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
                <li ref={`item-${index}`} key={index}>
                    <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/6318/1572069250647/front-left-side-47.jpg" height="240" width="360" />
                    <h2>{index+1}</h2>
                    <p>{`${index+1} ${item.title}`}</p>
                     <button styles={{height:"200px",width:"180px"}} onClick={()=>this.handleClick(index)}>{item.favFlag?"Remove from Favorite" :"ADD to Favorites"}</button>
                </li>
            )
        })
        return listOfItems;
      }
        return(
          <div>
          <ul>
            {listItems(items)}
          </ul>
          {this.props.loader ?  <span>Loading...........</span> :
          this.props.endOfinfinteScroll ?  <span>"End of the Page"</span> : ""}
        </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        items:state.infiniteScrollData.items,
        currentPage:state.infiniteScrollData.currentPage,
        endOfinfinteScroll:state.infiniteScrollData.failure,
        loader:state.infiniteScrollData.loader
    }
}

export default connect(mapStateToProps)(InfiniteScroll);
InfiniteScroll.defaultProps = defaultProps;
