import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RecipeCard from '../RecipeCard/RecipeCard';
// import { RecipeGallery } from '../../getters/Getters';

export const RecipeGallery = () => {
  const [recipeInfo, setRecipeInfo] = useState([]);

  const displayRecipe = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setRecipeInfo((prevRecipeInfo) => [...prevRecipeInfo, data.meals[0]]);
    } catch (msg) {
      console.log(msg);
    }
  };

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      displayRecipe();
    }
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <h3>Discover, Create, Share</h3>
            <p>Check our most popular recipes of this week</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {recipeInfo.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </Row>
      </Container>
    </>
  );
}


export default RecipeGallery;