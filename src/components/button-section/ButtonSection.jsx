import React, { useEffect, useMemo } from 'react'
import { ButtonSectionContainer, WarningMessage, Mintable } from './styles';
import { useSelector } from "react-redux";
import BuySection from './buy-section';
import ConnectSection from '../connect-section';
const ButtonSection = () => {
    const data = useSelector(state =>state.data);
    const totalSupply = useMemo(() =>{
        return data.totalSupply
    },[data])
    const blockchain = useSelector((state) => state.blockchain);
    const maxSupply = 10000;
if(!blockchain.account)
 return (
    <ButtonSectionContainer >
        <ConnectSection/>
        {blockchain.errorMsg && <WarningMessage>{blockchain.errorMsg}</WarningMessage>}
    </ButtonSectionContainer>
   
 )
  return (
    <ButtonSectionContainer>
        <Mintable className={"bold-text"}>{`You can mint ${data.numAva} more nfts`}</Mintable>
        <BuySection maxSupply = {maxSupply} totalSupply = {totalSupply} />
    </ButtonSectionContainer>
  )
}

export default ButtonSection