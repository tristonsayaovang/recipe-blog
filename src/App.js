import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Recipe from './Pages/Recipe';
import Header from './Components/Header';
import Error404 from './Pages/Error404';
import BroccoliSoup from './Recipes/BroccoliSoup';
import Posts from './Pages/Posts';
import ChickenParm from './Recipes/ChickenParm';
import { GrilledCheese } from './Recipes/GrilledCheese';
import { Bulgogi } from './Recipes/Bulgogi';
import { Ochicken } from './Recipes/Ochicken';
import { Steak } from './Recipes/Steak';
import { JapCurry } from './Recipes/JapCurry';
import { Tonkatsu } from './Recipes/Tonkatsu';
import { ShrimpTacos } from './Recipes/ShrimpTacos';
import { Locomoco } from './Recipes/Locomoco';
import { TonkotsuRamen } from './Recipes/TonkotsuRamen';
import { DeepFriedOreos } from './Recipes/DeepFriedOreos';
import Footer from './Components/Footer';


function App() {
  return (
   <>
   <h1 className='text-white drop-shadow-md bg-gradient-to-b from-red-500 to-rose-700 
    font-bold text-center text-3xl m-0 p-3 w-full cooking-with-triston'>
     Cooking with Triston </h1>
  
   <Router>
     <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/recipe" element={<Recipe />} />
            <Route path="/posts" element={<Posts />} >
                <Route path="broccoli_soup" element={<BroccoliSoup />}/>
                <Route path="chicken_parm" element={<ChickenParm />}/>
                <Route path="grilled_cheese" element={<GrilledCheese />}/>
                <Route path="bulgogi" element={<Bulgogi />}/>
                <Route path="ochicken" element={<Ochicken />}/>
                <Route path="steak" element={<Steak />}/>
                <Route path="japcurry" element={<JapCurry />}/>
                <Route path="tonkatsu" element={<Tonkatsu />}/>
                <Route path="shrimp_tacos" element={<ShrimpTacos />}/>
                <Route path="locomoco" element={<Locomoco />}/>
                <Route path="tonkotsu_ramen" element={<TonkotsuRamen />}/>
                <Route path="deep_fried_oreos" element={<DeepFriedOreos />}/>
              
                
              </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>
    </Router>
    
    <Footer />
   </>
  );
}
export default App;
