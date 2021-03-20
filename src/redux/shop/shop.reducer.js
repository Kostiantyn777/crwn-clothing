import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

//1.Write new reducer
//2.Import it to root-reducer
//3. Create selector
//4. Pull this Redux state to my component
