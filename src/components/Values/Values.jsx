import {
    ValuesSection,
    ContentValues,
    SquareValue,
    TittleSquare,
    ResumeSquare,
    SquareArea
} from './Styled';

import {
    Tittle
} from '../AboutUs/Styled';

export default function Values(){
    return(
        <ValuesSection id='values'>
            <ContentValues>
                <Tittle>NOSSOS VALORES DE TRABALHO</Tittle>
                <SquareArea>
                    <SquareValue>
                        <TittleSquare>Visão</TittleSquare>
                        <ResumeSquare>Ser a marcenaria de confiança do seu negócio e com o menor preço do Rio de Janeiro.</ResumeSquare>
                    </SquareValue>
                    <SquareValue>
                        <TittleSquare>Valores</TittleSquare>
                        <ResumeSquare>Honestidade, Bom senso, Qualidade, Inovação e Competitividade.</ResumeSquare>
                    </SquareValue>
                </SquareArea>
            </ContentValues>
        </ValuesSection>
    )
}