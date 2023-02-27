import { B2500 } from "../../styles/typography"
import { Avatar } from "../Avatar"
import { StyledContainer, StyledRecommendantions, StyledTextDiv } from "./style"

export const WriteComment = () =>{

    return(
        <StyledContainer>
            <div className="avatar">
                <Avatar username="Marcelo Almeida" />
                <B2500>Marcelo Almeida</B2500>
            </div>

            <StyledTextDiv>
                    <textarea id="story" name="story"
                            rows={7} cols={120} placeholder="Carro muito confortável, foi uma ótima experiência de compra..." >
                    </textarea>
                    <button>Comentar</button>
            </StyledTextDiv>

            <StyledRecommendantions>
                <button type="button">Gostei muito!</button>
                <button type="button">Incrível</button>
                <button type="button">Recomendarei para meus amigos!</button>
            </StyledRecommendantions>
            

        </StyledContainer>
    )
}