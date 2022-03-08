import styled from "styled-components";

export const AboutUsSection = styled.section`
    height: 65vh;
    width: 100%;
    background-color: #F5F5F5;
    font-family: 'Martel Sans', sans-serif;
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
    @media (max-width:900px){
        height: fit-content;
    }
`
export const ContentAboutUs = styled.div`
    max-width: 1000px;
    padding: 70px 0;
    text-align: center;
` 
export const SubTittle = styled.h2`
    font-size: 15px;
    color: #FDBF60;
`
export const Tittle = styled.h1`
    font-size: 28px;
    font-weight: lighter;
    padding: 20px 0 0 0;
    @media (max-width:900px){
        font-size: 22px;
    }
`
export const Paragrafo = styled.p`
    font-size: 16px;
    font-weight: lighter;
    color: #696969;
    padding: 50px 10px 0 10px;
    @media (max-width:900px){
        font-size: 14px;
    }
`