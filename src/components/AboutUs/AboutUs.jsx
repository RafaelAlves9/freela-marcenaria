import { 
    AboutUsSection,
    ContentAboutUs,
    SubTittle,
    Tittle,
    Paragrafo
} from "./Styled"
import Fade from 'react-bootstrap/Fade'

export default function AboutUs() {
    
    return(
        <AboutUsSection>
            <ContentAboutUs>
                <SubTittle>SOMOS O JEITO KS DE SER</SubTittle>
                <Tittle>SAIBA UM POUCO MAIS SOBRE NÓS</Tittle>
                <Paragrafo> Somos uma empresa jovem, focada na criação e fabricação de móveis residenciais e comerciais por meio de uma gestão feita por especialistas em Design, Arquitetura e Processos Industriais. Não somos daquelas marcenarias antigas que não investem na organização, evolução dos métodos e atendimento. Ouvimos você, sugerimos, construímos e lhe enviamos por e-mail o orçamento ou projeto 3D de ambientes ou móveis. Sabemos que a aquisição de um móvel sob medida ou de um projeto de decoração é um investimento alto que faz parte de um sonho e gera ansiedade e expectativa. Por isso mesmo que trabalhamos com ótimos prazos de entrega e utilizamos sempre da transparência para com nossos clientes.</Paragrafo>
                <Tittle>Pensamos como você, pois somos como você!</Tittle>
            </ContentAboutUs>
        </AboutUsSection>
    )
}