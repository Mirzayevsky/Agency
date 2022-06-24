import styled from "styled-components";

export const CardWrapper = styled.div`
width: 90%;
margin: auto;
background-color: #f20f20;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
@media only  screen and (max-width: 600px) {
    justify-content: center;
}

`;
export const CardInner = styled.div`
height: fit-content;
width:290px;
border-radius: 5px;
margin: 30px 0;
position: relative;
`;
export const CardImg = styled.img`
height: 100%;
width: 100%;
`;
export const CardBtn = styled.div`
height: 30px;
width: 120px;
background-color: #000;
color:#fff;
position: absolute;
cursor: pointer;
`;