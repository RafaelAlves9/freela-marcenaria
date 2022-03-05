import {
    Head,
    HeadBackGround,
    ContentHeader,
    SubTittle,
    Tittle
} from "./Styled";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
    AOS.init();

    return(
        <Head>
            <HeadBackGround />
            <ContentHeader>
                <SubTittle 
                data-aos="fade-right"
                data-aos-duration="1500"
                >TUDO PARA O SEU ESCRITÓRIO</SubTittle>
                <Tittle
                data-aos="fade-left"
                data-aos-duration="1500"
                >BAIAS SOUZA</Tittle>
            </ContentHeader>
        </Head>
    )
}