const initialState = {
    loading: false,
    cost:0,
    supply: 0,
    totalSupply:0,
    numAva: 0,
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
          cost: action.payload.cost,
          supply: action.payload.supply,
          numAva: action.payload.numAva,
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