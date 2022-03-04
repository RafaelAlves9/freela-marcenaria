import styled from 'styled-components';

export const WorkSection = styled.section`
    width: 100%;
    height: 90vh;
    background-color: #E7E6E6;
    display: flex;
    justify-content: center;
    text-align: center;
`;
export const ContentWork = styled.div`
    padding: 70px 10px;
    width: 95%;
    max-width: 1000px;
`;
export const Gallery = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
export const ImageGalerry = styled.img`
    max-width: 500px;
    width: 19%;
    overflow: hidden;
    src{
        width: 100%;
    }
`;