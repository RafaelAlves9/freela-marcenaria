import styled from 'styled-components';

export const WorkSection = styled.section`
    width: 100%;
    height: fit-content;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    text-align: center;
`;
export const ContentWork = styled.div`
    padding: 70px 0;
    width: 100%;
`;
export const Gallery = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 50px 0;
`;
export const ImageGalerry = styled.img`
    min-width: 330px;
    width: 30%;
    height: 350px;
    padding: 5px 0;
    overflow: hidden;
    transition: .3s;
    :hover{
        transform: scale(1.07);
        
    }
    @media (max-width:600px){
        height: 250px;
    }
`;