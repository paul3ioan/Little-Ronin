import React, { useEffect, useMemo } from 'react'
import { ButtonSectionContainer, WarningMessage } from './styles';
import { useSelector } from "react-redux";
import BuySection from './buy-section';
import ConnectSection from '../connect-section';
const ButtonSection = (props) => {
    const {id} = props;
    const data = useSelector(state =>state.data);
    const totalSupply = useMemo(() =>{
        return id===1 ? data.totalSupplyFirst : (id === 2 ? data.totalSupplySecond : ( id=== 3 ? data.totalSupplyThird :data.totalSupplyFourth))
    },[data])
    const blockchain = useSelector((state) => state.blockchain);
    const maxSupplyFirst = 9090;
    const maxSupplyFourth = 10;
    const maxSupplySecond = 800;
    const maxSupplyThird = 100;
    const maxSupply = id === 1 ? maxSupplyFirst :( id === 2 ? maxSupplySecond :( id === 3 ? maxSupplyThird : maxSupplyFourth));
if(!blockchain.account)
 return (
    <ButtonSectionContainer >
        <ConnectSection/>
        {blockchain.errorMsg && <WarningMessage>{blockchain.errorMsg}</WarningMessage>}
    </ButtonSectionContainer>
   
 )
  return (
    <ButtonSectionContainer>
        <BuySection maxSupply = {maxSupply} totalSupply = {totalSupply} id = {id}/>
    </ButtonSectionContainer>
  )
}

export default ButtonSection