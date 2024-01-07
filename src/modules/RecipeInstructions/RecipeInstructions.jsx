import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import { Recipe } from '../../getters/Getters';

export const RecipeInstructions = () => {
  const { recipeId } = useParams();
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then(response => response.json())
        .then(data => {setRecipeData(data.meals[0]);})
    } catch (msg) {
      console.log(msg);
    }
  }, [recipeId]);

  const ingredients = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient =  recipeData[`strIngredient${i}`];
    const measure = recipeData[`strMeasure${i}`];
    if (!ingredient) {
      break}
    ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <Container>
      <Row>
        <h1>Dish: {recipeData.strMeal}</h1>
        <Col md={12} lg={6} className='filteredRecipe__left'>
          <img src={recipeData.strMealThumb} alt={recipeData.strMeal} className="img-fluid"/>
        </Col>
        <Col md={12} lg={6} className='filteredRecipe__right'>
          <h2>Category: {recipeData.strCategory}</h2>
          <h2>Country: {recipeData.strArea}</h2>
          <h3>Ingredients</h3>
          <ul>{ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}</ul>
          <button onClick={'#'}>Watch video</button>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeInstructions;