import React from "react";
import { CardWrapper,CardInner} from "./style";

const Card = ({menuItem}) =>{
    return(
        <CardWrapper>
             {menuItem.map((Item)=>(
                <CardInner key={Item.id} src={Item.img}>
                </CardInner>
             ))}
        </CardWrapper>
    )
}
export default Card