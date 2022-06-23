import { Container, FilterBtn } from "./styles";

function Button({button, filter}) {
    return (
        <Container>
            {
                button.map((cat, i)=>{
                    return <FilterBtn type="button" onClick={()=> filter(cat)}>{cat}</FilterBtn>
                })
            }
        </Container>
    )
}

export default Button;