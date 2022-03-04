import styled from "styled-components";
import Header from '../../images/header.jpg';

export const Head = styled.header`
    height: 70vh;
    width: 100%;
    background-image: url(${Header});
    background-size: cover;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const HeadBackGround = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`
export const ContentHeader = styled.div`
    text-align: center;
    font-family: 'Hind', sans-serif;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SubTittle = styled.h2`
    font-size: 20px;
    padding: 0 0 0 10px;
    color: #fff;
    font-weight: lighter;
    letter-spacing: 10px;
    @media (max-width:600px){
        font-size: 17px;
    }
`;
export const Tittle = styled.h1`
    font-size: 80px;
    color: #FDBF60;
    font-weight: 800;
    padding: 0 0 50px 10px;
    letter-spacing: 10px;
    @media (max-width:600px){
        font-size: 50px;
    }
`;