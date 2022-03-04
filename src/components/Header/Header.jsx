import {
    Head,
    HeadBackGroung,
    ContentHeader,
    SubTittle,
    Tittle,
    BottonProject
} from "./Styled"

export default function Header() {
    return(
        <Head>
            <HeadBackGroung />
            <ContentHeader>
                <SubTittle>TUDO PARA O SEU ESCRITÓRIO</SubTittle>
                <Tittle>BAIA'S SOUZA</Tittle>
                <BottonProject>VEJA NOSSOS PROJETOS</BottonProject>
            </ContentHeader>
        </Head>
    )
}