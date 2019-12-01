const initialState = {
  items:[
  {
    "heading": 1,
    "title": "First post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 2,
    "title": "2 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 3,
    "title": "3 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 4,
    "title": "4 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 5,
    "title": "5 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 6,
    "title": "6 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 7,
    "title": "7 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 8,
    "title": "8 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 9,
    "title": "9 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 10,
    "title": "10 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 11,
    "title": "11 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 12,
    "title": "12 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 13,
    "title": "13 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 14,
    "title": "14 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 15,
    "title": "15 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 16,
    "title": "16 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 17,
    "title": "17 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 18,
    "title": "18 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 19,
    "title": "19 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 20,
    "title": "20 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 21,
    "title": "21 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 22,
    "title": "22 post of the Infinite Scrolling",
    "favFlag": 0
  },
  {
    "heading": 23,
    "title": "23 post of the Infinite Scrolling",
    "favFlag": 0
  }
]
}

const InfiniteScrollReducer = (state = initialState, action) => {
    console.log("intial ", state,"-------",action);
    switch (action.type) {
        case "InfiniteScroll":
            return {
            ...state,
            items : action.items
            }
        default: return state
    }
}
export default InfiniteScrollReducer;
