import React from "react";
import { Container, Link, LinkWrapper, Logo, NavbarBtn, Navigationbar } from "./styles";
import Logopng from "../../assets/logo/logo.png"
const Navbar = () =>{
    return(
        <Navigationbar>
            <Container>
                <Logo src={Logopng} alt="Logo">
                </Logo>
                <LinkWrapper>
                <Link>About</Link>
                <Link>Services</Link>
                <Link>Pricing</Link>
                <Link>Blog</Link>

                </LinkWrapper>
                <NavbarBtn>CONTACT</NavbarBtn>
            </Container>
        </Navigationbar>
    )
}
export default Navbar;
