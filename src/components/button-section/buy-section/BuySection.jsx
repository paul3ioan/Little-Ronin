import React, { useState, useEffect } from "react";
import { BuyContainer, BuyInput, MintButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./../../../redux/data/dataActions";
import { mainContract } from "./../../../absolutePath";
const BuySection = () => {

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [amount, setAmount] = useState("0");

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  const claimNFTs = () => {
    const mintAmount = parseInt(amount);
    if (mintAmount === 0 || !mintAmount) return;

    let cost = data.cost;
    let gasLimit = 300000;
    let price = BigInt(cost * amount);
    let totalCostWei = String(price);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(Number(amount))
      .send({
        to: mainContract.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
    getData();
  };
  return (
    <BuyContainer>
      <BuyInput
        className= "bold-text"
        placeholder ={'Amount:...'}
        value={amount === '0' ? "" : amount}
        onChange={(e) => {
          console.log(data, parseInt(e.target.value) ,  parseInt(data.numAva) >= parseInt(e.target.value), parseInt(e.target.value) + parseInt(data.supply) <=  parseInt(data.totalSupply))
          if(data && !isNaN(e.target.value) &&   parseInt(data.numAva) >= parseInt(e.target.value) && parseInt(e.target.value) + parseInt(data.supply) <=  parseInt(data.totalSupply))
          setAmount(e.target.value);
          if(e.target.value === '') setAmount('0');
        }}
      />
      <div className ="button mint-button w-button"
      style={{width:"40%", display:"flex",minWidth:"150px", justifyContent:"center"}}
        onClick={(e) => {
          e.preventDefault();
          {
            claimingNft === false ? claimNFTs() : "";
          }
        }}
      >
        <strong className="bold-text">Mint</strong>
      </div>
    </BuyContainer>
  );
};

export default BuySection;
