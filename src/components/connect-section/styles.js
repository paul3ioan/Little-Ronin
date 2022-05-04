import styled from 'styled-components'

export const ConnectButtonContainer = styled.button`
    border-radius: 10px;
    padding:8px 20px;
    border:0;
    outline:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image: linear-gradient(to bottom,rgba(255,255,255,.2) 0,rgba(255,255,255,.01) 100%);
    background-color: #2a2a2a;

    &:hover{
        cursor: pointer;
    }
`;
export const ConnectButtonText = styled.p`
    text-align: center;
    color:white!important;
    font-size:17px;
    letter-spacing:0.3px;
`;
