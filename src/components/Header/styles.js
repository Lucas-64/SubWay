import styled from 'styled-components';

export const Container =  styled.div`
   width: 100%;
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   height: 60px;
   background: #3C0078;
   border-bottom: 1px solid rgba(34, 90, 89, 0.2);
   z-index: 1000;
`;

export const MenuButtons = styled.button`
    color: white; 
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 6px;
    font-family: sofiapro;
    font-size: 15px;
    border-radius: 8px;

    :hover{
    background-color: #0f9246;
    color: white;
    }
`;

export const Content =  styled.div`
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;

`;

export const LogoContainer =  styled.div`
    display: block;
`;

export const Logo =  styled.img`
    width: 60%;
    margin-left: 4px;
    position: relative;
    top: 2px;
`;

export const OptionsContainer =  styled.div`
    display: flex;
    background: red;
`;

export const Icon =  styled.img`
    width: 37px;
    height: 37px;
`;

