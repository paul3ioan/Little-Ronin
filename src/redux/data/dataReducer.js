const initialState = {
    loading: false,
    costFirst:0,
    costSecond:0,
    costThird:0,
    totalSupply:0,
    totalSupplyFirst:0,
    totalSupplySecond: 0,
    totalSupplyThird: 0,
    totalSupplyFourth: 0,
    costFourth: 0,
    error: false,
    errorMsg: "",
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CHECK_DATA_REQUEST":
        return {
          ...state,
          loading: true,
          error: false,
          errorMsg: "",
        };
      case "CHECK_DATA_SUCCESS":
        return {
          ...state,
          loading: false,
          totalSupply:action.payload.totalSupply,
          totalSupplyFirst: action.payload.totalSupplyFirst,
          totalSupplySecond: action.payload.totalSupplySecond,
          totalSupplyThird: action.payload.totalSupplyThird,
          totalSupplyFourth: action.payload.totalSupplyFourth,
           costFirst:action.payload.costFirst,
          costSecond:action.payload.costSecond,
           costThird:action.payload.costThird,
           costFourth:action.payload.costFourth,
          error: false,
          errorMsg: "",
        };
      case "CHECK_DATA_FAILED":
        return {
          ...initialState,
          loading: false,
          error: true,
          errorMsg: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;