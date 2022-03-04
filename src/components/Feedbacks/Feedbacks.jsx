import { Carousel } from 'react-bootstrap';
import { 
  Header,
  ContentCarousel,
  Name,
  Space,
  SubName,
} from './Styled'

export default function Feedback() {
    
    return(
        <Header id='feedback'>
          <ContentCarousel>
            <Carousel>
              <Carousel.Item>
                <Space>
                  <Name>aaaaaaaaaaaaaaaaaaaaaaaaaaa</Name>
                  <SubName>venha jaaaaaaaa</SubName>
                </Space>
              </Carousel.Item>
              <Carousel.Item>
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
              </Carousel.Item>
            </Carousel>
          </ContentCarousel>
      </Header>
    )
}