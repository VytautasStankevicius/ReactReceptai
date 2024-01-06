import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeSearch = () => {
  const [recipeName, setRecipeName] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(response => response.json())
        .then(data => {
          if (data.meals) {
            navigate(`/recipeDisplay/${data.meals[0].idMeal}`);
          } else {
            alert('Recipe not found');
          }
        })
    } catch (msg) {
      console.log(msg);
    }
  };

  const handleInputChange = (event) => {
    setRecipeName(event.target.value);
  };

  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Enter recipe"
        value={recipeName} onChange={handleInputChange}/>
      <button onClick={handleButtonClick} className="btn btn-outline-secondary" type="button">Find Recipe</button>
    </div>
  );
};

export default RecipeSearch;