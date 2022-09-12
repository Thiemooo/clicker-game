const initialState = {
  bank: {
    balance: 0,
    perSec: 0,
    perClick: 1
  },
  shop: [
    {
      name: 'WeepWoop1',
      perSec: 0,
      perClick: 1,
      level: 0,
      price: 10
    },
    {
      name: 'WeepWoop2',
      perSec: 5,
      perClick: 1,
      level: 0,
      price: 10
    },
    {
      name: 'WeepWoop3',
      perSec: 5,
      perClick: 1,
      level: 0,
      price: 10
    },
    {
      name: 'WeepWoop4',
      perSec: 5,
      perClick: 1,
      level: 0,
      price: 10
    },
    {
      name: 'WeepWoop5',
      perSec: 5,
      perClick: 1,
      level: 0,
      price: 10
    },
    {
      name: 'WeepWoop6',
      perSec: 5,
      perClick: 1,
      level: 0,
      price: 10
    }
  ]
};

const PRICE_MULTIPLIER = 2;

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        bank: {
          ...state.bank,
          balance: state.bank.balance + state.bank.perClick
        }
      };
    case 'SECOND':
      return {
        ...state,
        bank: {
          ...state.bank,
          balance: state.bank.balance + state.bank.perSec/2
        }
      };
    case 'BUY':
      return state.bank.balance >= action.shopitem.price ? {
          ...state,
          bank: {
            ...state.bank,
            perSec: state.bank.perSec + action.shopitem.perSec,
            perClick: state.bank.perClick + action.shopitem.perClick,
            balance: state.bank.balance - action.shopitem.price
          },
          shop: state.shop.map((el) => {
            if (el.name === action.shopitem.name) {
              el.level++;
              el.price = Math.round(el.price * PRICE_MULTIPLIER);
            }
            return el;
          })
        }
        : state
    default:
      return state;
  }
}

export default reducer;