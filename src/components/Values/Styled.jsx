import styled from "styled-components";

export const ValuesSection = styled.section`
    width: 100%;
    height: fit-content;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
`
export const ContentValues = styled.div`
    width: 98%;
    padding: 50px 0;
    max-width: 900px;
    text-align: center;
`
export const SquareArea = styled.div`
    width: 98%;
    padding: 30px 0;
    max-width: 900px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const SquareValue = styled.div`
    width: 100%;
    max-width: 400px;
    height: 250px;
    border: 2px solid #E7E6E6;
    margin: 5px 5px;
`
export const TittleSquare = styled.h2`
    font-size: 30px;
    padding: 25px 0;
`
export const ResumeSquare = styled.p`
    font-size: 18px;
    padding: 0px 25px;
    font-weight: lighter;
    color: #696969;
    [a]{
        text-decoration: none;
    }
`