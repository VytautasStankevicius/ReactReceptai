import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../About/About';
import RecipeCategory from '../RecipeCategory/RecipeCategory';
import RecipeGallery from '../RecipeGallery/RecipeGallery';
import RecipeInstructions from '../RecipeInstructions/RecipeInstructions';
import RecipeCategoryFilter from '../RecipeCategoryFilter/RecipeCategoryFilter';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/category' element={<RecipeCategory />} />
        <Route path="/category/:categoryName" element={<RecipeCategoryFilter />} />
        <Route path='/recipeDisplay' element={<RecipeGallery />} />
        <Route path="/recipeDisplay/:recipeId" element={<RecipeInstructions />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;