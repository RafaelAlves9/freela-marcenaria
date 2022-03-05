import {
    ButtonContainer
} from './Styled';
import Whats from '../../images/whats.png'

export default function ButtonFixed() {
    
    return(
        <ButtonContainer>
            <a href="https://api.whatsapp.com/send?phone=555521985834445&text=Ol%C3%A1%2C%20estou%20interessado%20nas%20baias!" target='_blank'><img src={Whats}/></a>
        </ButtonContainer>
    )
}