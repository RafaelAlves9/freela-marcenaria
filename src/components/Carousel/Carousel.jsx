import { Carousel } from 'react-bootstrap';
import { 
  Header,
  ContentCarousel,
  Imagem
} from './Styled'
import Img1 from '../../images/1.png'
import Img2 from '../../images/2.jpeg'
import Img3 from '../../images/3.jpeg'
import Img4 from '../../images/4.jpeg'
import Img5 from '../../images/5.jpeg'
import Img6 from '../../images/6.png'
import Img7 from '../../images/7.png'


export default function Feedback() {
    
    return(
        <Header id='feedback'>
          <ContentCarousel>
            <Carousel>
              <Carousel.Item>
                  <Imagem src={Img1}/>
              </Carousel.Item>
              <Carousel.Item>
                  <Imagem src={Img2}/>
              </Carousel.Item>
              <Carousel.Item>
                  <Imagem src={Img3}/>
              </Carousel.Item>
              <Carousel.Item>
                  <Imagem src={Img4}/>
              </Carousel.Item>
              <Carousel.Item>
                  <Imagem src={Img5}/>
              </Carousel.Item>
              <Carousel.Item>
                  <Imagem src={Img6}/>
              </Carousel.Item>
              <Carousel.Item>
                  <Imagem src={Img7}/>
              </Carousel.Item>
            </Carousel>
          </ContentCarousel>
      </Header>
    )
}