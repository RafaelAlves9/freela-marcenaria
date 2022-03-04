import {
    Head,
    HeadBackGroung,
    ContentHeader,
    SubTittle,
    Tittle,
    BottonProject
} from "./Styled";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
    AOS.init();

    return(
        <Head>
            <HeadBackGroung />
            <ContentHeader>
                <SubTittle 
                // data-aos="fade-right"
                // data-aos-duration="1500"
                >TUDO PARA O SEU ESCRITÓRIO</SubTittle>
                <Tittle
                // data-aos="fade-left"
                // data-aos-duration="1500"
                >BAIA'S SOUZA</Tittle>
                <BottonProject>VEJA NOSSOS PROJETOS</BottonProject>
            </ContentHeader>
        </Head>
    )
}