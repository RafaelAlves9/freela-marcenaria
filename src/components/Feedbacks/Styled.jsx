import styled from 'styled-components'
import BackGround from '../../images/pessoa4.png'

export const Header = styled.section`
  background-image: url(${BackGround});
  background-size: cover;
  background-position: center;
  text-align: center;
  width: 100%;
  height: 400px;
`
export const ContentCarousel = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`
export const Space = styled.div`
  padding: 50px;
  width: 100%;
  height: 350px;
`
export const Name = styled.h1`
  font-size: 35px;
  color: #fff;
`
export const SubName = styled.h1`
  font-size: 22px;
  color: #fff;
`