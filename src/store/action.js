export function increment() {
  return {
    type: 'INCREMENT'
  };
}

export function second() {
  return {
    type: 'SECOND'
  };
}

export function buy(shopitem) {
  return {
    type: 'BUY',
    shopitem: shopitem
  };
}