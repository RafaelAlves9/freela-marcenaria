import {
    DescriptionSection,
    ContentDescription,
    SquareArea,
} from './Styled';
import { 
    SquareValue,
    TittleSquare,
    ResumeSquare
 } from '../Values/Styled';
 import {
    Tittle
 } from '../AboutUs/Styled';

export default function Description() {
    
    return(
        <DescriptionSection>
            <ContentDescription>
            <Tittle>DESCRIÇÃO DAS BAIAS</Tittle>
                <SquareArea>
                    <SquareValue>
                        <TittleSquare>Medida Padrão</TittleSquare>
                        <ResumeSquare> <strong>LARGURA: 70 cm <br /> PROFUNDIDADE: 50 cm <br /> ALTURA 110 cm <br /> MATERIAL: 100% MDF</strong></ResumeSquare>
                    </SquareValue>
                    <SquareValue>
                        <TittleSquare>Preços</TittleSquare>
                        <ResumeSquare><strong>MEDIDA PADRÃO + COR BRANCA: <br /> R$ 230,00</strong> <br /></ResumeSquare>
                    </SquareValue>
                    <SquareValue>
                        <TittleSquare>Entrega e Montagem</TittleSquare>
                        <ResumeSquare><strong>Entregamos e montamos em todo estado do Rio de Janeiro a partir de 3 unidades. <br/><br/> </strong> Taxa de entrega sob consulta*</ResumeSquare>
                    </SquareValue>
                    <SquareValue>
                        <TittleSquare>Medição e Orçamento</TittleSquare>
                        <ResumeSquare><strong>Para outras cores e medidas, faça um orçamento conosco pelo Whatsapp! <br/><br/> </strong>Caso necessário, marcaremos uma avaliação presencial*</ResumeSquare>
                    </SquareValue>
                </SquareArea>
            </ContentDescription>
        </DescriptionSection>
    )
}