import styled from "styled-components";
export const Navigationbar = styled.div`
background-color: #28293E;
padding: 20px 0;
`;

export const Container = styled.div`
width: 90%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Logo = styled.img`
width: 138px;
height: 43px;
cursor: pointer;

`;
export const LinkWrapper = styled.div`
display: flex;
align-items: center;
`;
export const Link = styled.div`
color: #fff;
font-family: Epilogue,sans-serif;
font-size: 16px;
font-weight: 300 !important;
margin: 0 30px;
margin-top: 10px;
cursor: pointer;

`;
export const NavbarBtn = styled.button`
width: 138px;
height: 43px;
color: #fff;
border: 1px solid #fff;
font-family: Epilogue,sans-serif;
border-radius: 5px;
cursor: pointer;
`;