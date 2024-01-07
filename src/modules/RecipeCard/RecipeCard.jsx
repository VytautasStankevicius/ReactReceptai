import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import clockGreen from '../../images/clockGreen.svg';
import userGreen from '../../images/userGreen.svg';
import statistics from '../../images/statistics.svg';
import { randomTimer } from '../../getters/Getters';

const RecipeCard = ({ recipe }) => {
  const randomNumbers = randomTimer()

  return (
        <Col className="rounded" sm={10} lg={4}>
          <div>
            <img src={recipe.strMealThumb} className="img-fluid" alt={clockGreen} />
            <div>
              <p><img src={clockGreen} alt="Clock Green" />{randomNumbers} Mins</p>
              <p><img src={userGreen} alt="User Green" /> {randomNumbers} Serving</p>
              <p><img src={statistics} alt="Statistics" /> {randomNumbers}Easy</p>
            </div>
          </div>
          <div>
            <article>{recipe.strMeal}</article>
            <p><Link to={`/recipeDisplay/${recipe.idMeal}`}>View Recipe</Link></p>
          </div>
        </Col>
  );
}

export default RecipeCard;