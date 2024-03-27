import logo from './logo.svg';
// import './App.css';
import RecipeReviewCard from './components/card/RecipeReviewCard';
import CardGpt from './components/card/CardGpt';
import ProductCard from './components/card/ProductCard';
import ProductCategoryCard from './components/card/ProductCategoryCard';
import ReciepeCard from './components/card/ReciepeCard';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Home from './assets/Home';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Sidebar from './components/sidebar/sidebar';
import Sidebars from './components/sidebar/sidebar';
import Offer from './pages/Offer';

function App() {
  const product = {
    name : "Nahid",
    description : "I am nahid Hasan Lovon",
    image: "https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg"
  }
  return (
    <div style={{backgroundColor:"none"}}>
      {/* {/* <RecipeReviewCard />
       <CardGpt product={product}/> */}
     {/* <ProductCard />  */}
       {/* <ReciepeCard /> */}
       {/* <Navbar />
       <Home />
       <ShoppingCart />        */}
                {/* <ProductDetails /> */}
                {/* <Sidebars /> */}
                <Offer />
    </div>
  );
}

export default App;
