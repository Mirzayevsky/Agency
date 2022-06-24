import { Container, FilterBtn } from "./styles";

function Button({state, filter}) {
    const {filters} = state
    return (
        <Container>
            {
                filters.map((Item)=>{
                    return <FilterBtn key={Item.id} type="button" onClick={()=> filter(Item.name)}>{Item.name}</FilterBtn>
                })
            }
        </Container>
    )
}

export default Button;