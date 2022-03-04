import styled from "styled-components";
import Header from '../../images/';

export const Head = styled.header`
    height: 70vh;
    width: 100%;
    background-image: url(${Header});
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ContentHeader = styled.div`
    height: 50%;
    text-align: center;
    font-family: 'Hind';
`;
export const SubTittle = styled.h2`
    font-size: 20px;
    color: #fff;
    font-weight: lighter;
`;
export const Tittle = styled.h1`
    font-size: 80px;
    color: #FDBF60;
    font-weight: 700;
`;