import React, { useContext, useState } from "react";
import {Header, HomeWraper, Title,Text, TextBox, CardSection } from "./styles";
import Card from "../components/card/index"
import Button from "../components/filterButton/index"
import { Context } from "../context/context";

// const allCategories = ['All', ...new Set(data.map(item => item.category))];
// const allCategories = ['all','design','branding','illustration','motion']

const Home = () => {
    const {state,dispatch}  = useContext(Context)
    // const [menuItem, setMenuItem] = useState(state);
    // const [buttons, setButtons] = useState(allCategories);
  
    const filter = (Item) => {
      dispatch({
        type:"FILTER_PICTURE",
        payload:Item
      })
     
    }
    return(
        <HomeWraper>
                <Header>
                  <TextBox>
                    <Title>Portfolio</Title>
                    <Text>Agency provides a full services range including technical skills,design,business understanding</Text>
                  </TextBox>
                </Header>
                <CardSection>
                 <Button state={state} filter={filter} />
                 <Card/>
                </CardSection>
        </HomeWraper>
    )
}
export default Home;