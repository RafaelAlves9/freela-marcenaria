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
export const ContentHeader = styled.div`
    text-align: center;
    font-family: 'Hind';
`;
export const SubTittle = styled.h2`
    font-size: 22px;
    color: #fff;
    font-weight: lighter;
`;
export const Tittle = styled.h1`
    font-size: 80px;
    color: #FDBF60;
    font-weight: 700;
    padding-bottom: 50px;
`;
export const BottonProject = styled.span`
    background-color: #FDBF60;
    padding: 15px 40px;
    border-radius: 25px;
    cursor: pointer;
    transition: .3s;

    :hover{
        color: #FDBF60;
        background-color: #000;
        transition: .5s;
    }
`;