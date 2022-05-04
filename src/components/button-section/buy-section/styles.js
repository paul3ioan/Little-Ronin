import styled from 'styled-components'

export const BuyContainer = styled.div`
    display:flex;
    gap:10px;
    justify-content:center;
    align-items:center;
    padding:5px 10px;
    margin:0;
    width:50%;
    @media screen and (max-width:500px)
    {
        flex-direction:column;
    }
`;
export const BuyInput = styled.input`
    text-align:center;
    padding:15px 20px;
    max-width:80px;
    border:0;
    color:white!important;
    outline:0;
    border-radius:10px;
    background-color:#004179;;
    &:hover{
        outline:0;
    }
`;
export const MintButton = styled.button`
      border-radius: 10px;
    padding:15px 50px;
    border:0;
    outline:0;
    color:white!important;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image: linear-gradient(to bottom,rgba(255,255,255,.2) 0,rgba(255,255,255,.01) 100%);
    background-color: #2a2a2a;

    &:hover{
        cursor: pointer;
    }
`;