import React, { useState } from "react";
import {Header, HomeWraper, Title,Text, TextBox, CardSection } from "./styles";
import Card from "../components/card/index"
import data  from "../data";
import Button from "../components/filterButton/index"

// const allCategories = ['All', ...new Set(data.map(item => item.category))];
const allCategories = ['all','design','illustration','motion']

const Home = () => {
    const [menuItem, setMenuItem] = useState(data);
    const [buttons, setButtons] = useState(allCategories);
    console.log(menuItem)

    const filter = (button) => {

      if(button.toLowerCase() === 'all'){
        setMenuItem(data);
        return;
      }
      const filteredData = data.filter(item => item.category.toLowerCase().trim() ===  button.toLowerCase().trim());
      setMenuItem(filteredData)
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
                 <Button button={buttons} filter={filter} />
                 <Card menuItem={menuItem} />
                </CardSection>

        </HomeWraper>
    )
}
export default Home;