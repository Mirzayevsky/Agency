import styled from "styled-components";

export const CardWrapper = styled.div`
width: 90%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
@media only  screen and (max-width: 600px) {
    justify-content: center;
}

`;
export const CardInner = styled.img`
height: 340px;
width: 280px;
border: 2px solid green;
margin: 20px 0;

`;