const initialState = {
  orders: [
    {
      id: 1,
      title: "Make me a site",
      price: 2000,
      desc: "I want a brand new landing for my product called lalala lululu I want a brand new landing for my product called lalala lululu I want a brand new landing for my product called lalala lululuI want a brand new landing for my product called lalala lululu I want a brand new landing for my product called lalala lululuI want a brand new landing for my product called lalala lululu",
      date: "06.04.2021",
      active: 1,
    },
    {
      id: 2,
      title: "Make me a site",
      price: 5000,
      desc: "I want a brand new landing for my product called lalala lululu I want a brand new landing for my product called lalala lululu I want a brand new landing for my product called lalala lululuI want a brand new landing for my product called lalala lululu I want a brand new landing for my product called lalala lululuI want a brand new landing for my product called lalala lululu",
       date: "06.04.2021",
      active: 1,
    },
    {
      id: 3,
      title: "Make me a site",
      price: 3000,
      desc: "I want a brand new landing for my product called lalala lululu I want a brand new landing for my product called lalala lululu I want a brand new landing for my product called lalala lululuI want a brand new landing for my product called lalala lululu I want a brand new landing for my product called lalala lululuI want a brand new landing for my product called lalala lululu",
      date: "06.04.2021",
      active: 1,
    },
  ],
};

const orders = (state = initialState, action) => {
  if (action.type === "SET_ORDERS") {
    return {
      ...state,
      orders: action.payload,
    };
  }
  return state;
};
export default orders;
