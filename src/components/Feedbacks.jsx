import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { 
  Header,
  Name,
  Space,
  SubName,
} from '../styled/Styled'

export default function Feedback() {
    
    return(
        <Header>
        <Carousel>
          <Carousel.Item>
            <Space>
              <Name>aaaaaaaaaaaaaaaaaaaaaaaaaaa</Name>
              <SubName>venha jaaaaaaaa</SubName>
            </Space>
          </Carousel.Item>
          <Carousel.Item>
          <Space>
              <Name>aaaaaaaaaaaaaaaaaaaaaaaaaaa</Name>
              <SubName>venha jaaaaaaaa</SubName>
            </Space>
          </Carousel.Item>
          <Carousel.Item>
          <Space>
              <Name>aaaaaaaaaaaaaaaaaaaaaaaaaaa</Name>
              <SubName>venha jaaaaaaaa</SubName>
            </Space>
          </Carousel.Item>
          <Carousel.Item>
          <Space>
              <Name>aaaaaaaaaaaaaaaaaaaaaaaaaaa</Name>
              <SubName>venha jaaaaaaaa</SubName>
            </Space>
          </Carousel.Item>
          </Carousel>
      </Header>
    )
}