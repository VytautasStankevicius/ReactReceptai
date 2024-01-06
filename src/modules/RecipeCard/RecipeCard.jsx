import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import clockGreen from '../../images/clockGreen.svg';
import userGreen from '../../images/userGreen.svg';
import statistics from '../../images/statistics.svg';
import { randomTimer } from '../../getters/Getters';

const RecipeCard = ({ recipe }) => {
  return (
        <Col className="cardTemplate rounded" sm={10} lg={4}>
          <div className='cardTemplate__top'>
            <img src={recipe.strMealThumb} className="img-fluid" alt={clockGreen} />
            <div className='top__servingInfo'>
              <p><img src={clockGreen} alt="Clock Green" />{randomTimer()} Mins</p>
              <p><img src={userGreen} alt="User Green" /> {randomTimer()} Serving</p>
              <p><img src={statistics} alt="Statistics" /> {randomTimer()}Easy</p>
            </div>
          </div>
          <div className='cardTemplate__bottom'>
            <article>{recipe.strMeal}</article>
            <p><Link to={`/recipeDisplay/${recipe.idMeal}`}>View Recipe</Link></p>
          </div>
        </Col>
  );
}

export default RecipeCard;