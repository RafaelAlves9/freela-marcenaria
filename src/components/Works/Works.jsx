//images
import Port1 from '../../images/1.png'
import Port2 from '../../images/2.jpeg'
import Port3 from '../../images/3.jpeg'
import Port4 from '../../images/4.jpeg'
import Port5 from '../../images/5.jpeg'
import Port6 from '../../images/6.png'
import Port7 from '../../images/7.png'

import {
    WorkSection,
    ContentWork,
    Gallery,
    ImageGalerry
} from './Styled';
//titulos
import {
    SubTittle,
    Tittle
} from '../AboutUs/Styled';
//AOS Efects
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Works() {
    AOS.init()

    return(
        <WorkSection id="works">
            <ContentWork>
                <SubTittle
                 data-aos="fade-up"
                 data-aos-duration="800"
                >NA MEDIDA CERTA</SubTittle>
                <Tittle
                 data-aos="fade-up"
                 data-aos-duration="800"
                >VEJA UM POUCO DO QUE FAZEMOS</Tittle>
                <Gallery>
                    <ImageGalerry src={Port1}/>
                    <ImageGalerry src={Port2}/>
                    <ImageGalerry src={Port3}/>
                    <ImageGalerry src={Port4}/>
                    <ImageGalerry src={Port5}/>
                    <ImageGalerry src={Port6}/>
                    <ImageGalerry src={Port7}/>
                </Gallery>
            </ContentWork>
        </WorkSection>
    )
}