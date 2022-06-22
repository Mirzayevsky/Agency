import React from "react";
import { Container, HomeWraper } from "./styles";
import Card from "../components/card/index"

const Home = () =>{
    return(
        <HomeWraper>
            <Container>
                <Card/>

            </Container>
        </HomeWraper>
    )
}
export default Home;