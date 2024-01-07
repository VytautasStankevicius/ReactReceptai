import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';



//Neturim laiko API tad randomize
export function randomTimer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};


//Kategorijos 
// export const Category = () => {
//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     try {
//       fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//         .then(response => response.json())
//         .then(data => setCategory(data.categories));
//     } catch (msg) {
//       console.log(`category fetch:${msg}`);
//     }
//   }, []);

//   return (
//     <Container>
//       <Row className='recipeCategory'>
//         {category.map(categoryItem => (
//           <Col key={categoryItem.idCategory} sm={12} lg={4} className='recipeCategory__items mb-3'>
//             <Link to={`/category/${categoryItem.strCategory}`}>
//               <img src={categoryItem.strCategoryThumb} alt={categoryItem.strCategory} />
//               <h3>{categoryItem.strCategory}</h3>
//             </Link>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

//Recepto puslapis su info
// export const Recipe = () => {
//   const { recipeId } = useParams();
//   const [recipeData, setRecipeData] = useState([]);

//   useEffect(() => {
//     try {
//       fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
//         .then(response => response.json())
//         .then(data => {setRecipeData(data.meals[0]);})
//     } catch (msg) {
//       console.log(msg);
//     }
//   }, [recipeId]);

//   const ingredients = [];
  
//   for (let i = 1; i <= 20; i++) {
//     const ingredient =  recipeData[`strIngredient${i}`];
//     const measure = recipeData[`strMeasure${i}`];
//     if (!ingredient) {
//       break}
//     ingredients.push(`${ingredient} - ${measure}`);
//   }

//   return (
//     <Container>
//       <Row className='filteredRecipe'>
//         <h1>Dish: {recipeData.strMeal}</h1>
//         <Col md={12} lg={6} className='filteredRecipe__left'>
//           <img src={recipeData.strMealThumb} alt={recipeData.strMeal} className="img-fluid"/>
//         </Col>
//         <Col md={12} lg={6} className='filteredRecipe__right'>
//           <h2>Category: {recipeData.strCategory}</h2>
//           <h2>Country: {recipeData.strArea}</h2>
//           <h3>Ingredients</h3>
//           <ul>{ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}</ul>
//           <button className="watchVideoButton" onClick={'#'}>Watch video</button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };


//Galerija
// export const RecipeGallery = () => {
//   const [recipeInfo, setRecipeInfo] = useState([]);

//   const displayRecipe = async () => {
//     try {
//       const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
//       const data = await response.json();
//       setRecipeInfo((prevRecipeInfo) => [...prevRecipeInfo, data.meals[0]]);
//     } catch (msg) {
//       console.log(msg);
//     }
//   };

//   useEffect(() => {
//     for (let i = 0; i < 6; i++) {
//       displayRecipe();
//     }
//   }, []);

//   return (
//     <>
//       <Container className="mainTopPart">
//         <Row>
//           <Col sm={12} lg={6} className="mainTopPart__article">
//             <h3>Discover, Create, Share</h3>
//             <p>Check our most popular recipes of this week</p>
//           </Col>
//           <Col sm={12} lg={6} className="mainTopPart__button">
//             <a href='#'>See All</a>
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Row>
//           {recipeInfo.map((recipe) => (
//             <RecipeCard key={recipe.idMeal} recipe={recipe} />
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// }

//Receptu paieska
// export const RecipeSearch = () => {
//   const [recipeName, setRecipeName] = useState('');
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     try {
//       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
//         .then(response => response.json())
//         .then(data => {
//           if (data.meals) {
//             navigate(`/recipeDisplay/${data.meals[0].idMeal}`);
//           } else {
//             alert('Recipe not found');
//           }
//         })
//     } catch (msg) {
//       console.log(msg);
//     }
//   };

//   const handleInputChange = (event) => {
//     setRecipeName(event.target.value);
//   };

//   return (
//     <div className="input-group">
//       <input type="text" className="form-control" placeholder="Enter recipe"
//         value={recipeName} onChange={handleInputChange}/>
//       <button onClick={handleButtonClick} className="btn btn-outline-secondary" type="button">Find Recipe</button>
//     </div>
//   );
// };
