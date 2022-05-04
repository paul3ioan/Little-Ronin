// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    
    try {
      
        let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply().call();
        let costFirst = await store
        .getState()
        .blockchain.smartContract.methods.costFirst().call();
        let costSecond = await store
        .getState()
        .blockchain.smartContract.methods.costSecond().call();
        let costThird = await store
        .getState()
        .blockchain.smartContract.methods.costThird().call();
        let totalSupplyFirst = await store
        .getState()
        .blockchain.smartContract.methods.firstSupply().call();

        let totalSupplySecond = await store
        .getState()
        .blockchain.smartContract.methods.secondSupply().call();
       
        let totalSupplyThird = await store
        .getState()
        .blockchain.smartContract.methods.thirdSupply().call();
        let totalSupplyFourth = await store
        .getState()
        .blockchain.smartContract.methods.fourthSupply().call();
        let costFourth = await store
        .getState()
        .blockchain.smartContract.methods.costFourth().call();


 
      dispatch(
        fetchDataSuccess({
          totalSupply,
          totalSupplyFirst,
          totalSupplySecond,
          totalSupplyThird,
          totalSupplyFourth,
          costFirst,
          costSecond,
          costThird,
          costFourth,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};