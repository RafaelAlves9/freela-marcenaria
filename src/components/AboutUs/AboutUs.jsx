import { 
    AboutUsSection,
    ContentAboutUs,
    SubTittle,
    Tittle,
    Paragrafo
} from "./Styled";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUs() {
    AOS.init()

    return(
        <AboutUsSection id="aboutus">
            <ContentAboutUs>
                <SubTittle
                data-aos="fade-up"
                data-aos-duration="800"
                >SOMOS O JEITO SOUZA DE SER</SubTittle>
                <Tittle
                data-aos="fade-up"
                data-aos-duration="800"
                >SAIBA UM POUCO MAIS SOBRE NÓS</Tittle>
                <Paragrafo
                data-aos="fade-up"
                data-aos-duration="800"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia exercitationem eum doloremque facere dolorum blanditiis consequatur similique eaque, officiis, pariatur ab velit quos maiores dignissimos voluptas eius excepturi earum nulla nostrum expedita minima eligendi. Sed provident ipsa odit. Ex aut nisi aspernatur nesciunt ipsum officia quidem quis aliquid quo sapiente. Ex aut nisi aspernatur nesciunt ipsum officia quidem quis aliquid quo sapiente</Paragrafo>
                <Tittle
                data-aos="fade-up"
                data-aos-duration="800">Pensamos como você, pois somos como você!</Tittle>
            </ContentAboutUs>
        </AboutUsSection>
    )
}