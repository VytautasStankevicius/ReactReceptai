import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeCategoryFilter = () => {
  const [filteredCategories, setFilteredCategories] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then(response => response.json())
        .then(data => setFilteredCategories(data.meals));
    } catch (msg) {
      console.log(msg);
    }
  }, [categoryName]);

  return (
    <Container>
        <Row>
          {filteredCategories.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </Row>
    </Container>
  );
}

export default RecipeCategoryFilter;