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
export const HeadBackGroung = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`
export const ContentHeader = styled.div`
    text-align: center;
    font-family: 'Hind', sans-serif;
    position: absolute;
`;
export const SubTittle = styled.h2`
    font-size: 20px;
    color: #fff;
    font-weight: lighter;
    letter-spacing: 10px;
`;
export const Tittle = styled.h1`
    font-size: 80px;
    color: #FDBF60;
    font-weight: 800;
    padding-bottom: 50px;
    letter-spacing: 10px;
`;
export const BottonProject = styled.span`
    background-color: #FDBF60;
    padding: 15px 40px;
    border-radius: 25px;
    cursor: pointer;
    transition: .3s;
    letter-spacing: 5px;
    :hover{
        color: #FDBF60;
        background-color: #000;
        transition: .5s;
    }
    @media (max-width:800px){
        text-align: center;
    }
`;