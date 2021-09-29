const initialState = {
    freelancers: [
      {
        id: 1,
        name: "Alex Byba",
        company: "ELEX => FLEX",
        exp: 2017

      }, {
        id: 2,
        name: "Alex Byba",
        company: "ELEX => FLEX",
        exp: 2017

      }, {
        id: 3,
        name: "Alex Byba",
        company: "ELEX => FLEX",
        exp: 2017

      }, {
        id: 4,
        name: "Alex Byba",
        company: "ELEX => FLEX",
        exp: 2017

      }, {
        id: 5,
        name: "Alex Byba",
        company: "ELEX => FLEX",
        exp: 2017

      },
    ],
  };
  
  const freelancers = (state = initialState, action) => {
    if (action.type === "SET_FREELANCERS") {
      return {
        ...state,
        freelancers: action.payload,
      };
    }
    return state;
  };
  export default freelancers;
  