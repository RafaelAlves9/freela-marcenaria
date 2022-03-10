import { Carousel } from 'react-bootstrap';
import { 
  Header,
  ContentCarousel,
  Imagem
} from './Styled'
import Img1 from '../../images/1.png'
import Img2 from '../../images/2.png'
import Img3 from '../../images/3.png'
import Img4 from '../../images/4.png'
import Img5 from '../../images/5.png'
import Img6 from '../../images/6.png'


export default function Feedback() {
    
    return(
        <Header id='feedback'>
          <ContentCarousel>
            <Carousel>
              <Carousel.Item>
                  <Imagem src={Img}/>
              </Carousel.Item>
              {/* <Carousel.Item>
              <Space>
                  <Name>bbbbbbbbb</Name>
                  <SubName>venha jaaaaaaaa</SubName>
                </Space>
              </Carousel.Item>
              <Carousel.Item>
                <Space>
                  <Name>ccccccccccc</Name>
                  <SubName>venha jaaaaaaaa</SubName>
                </Space>
              </Carousel.Item>
              <Carousel.Item>
                <Space>
                  <Name>ddddddddddddd</Name>
                  <SubName>venha jaaaaaaaa</SubName>
                </Space>
              </Carousel.Item> */}
            </Carousel>
          </ContentCarousel>
      </Header>
    )
}