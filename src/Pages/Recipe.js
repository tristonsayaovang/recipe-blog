import broccoli_soup from './../Images/broccoli_soup.jpg'
import chickenparm from './../Images/chickenparm.jpg'
import grilledcheese from './../Images/grilledcheese.jpg'
import './Posts.css'
import { Link } from "react-router-dom";
import bulgogi from './../Images/bulgogi.jpg'
import ochicken from './../Images/ochicken.jpg'
import steak from './../Images/steak_square.jpg'
import japcurry from './../Images/japcurry.jpg'
import tonkatsu from './../Images/tonkatsu_square.jpg'
import shrimp_tacos from './../Images/shrimptaco_square.jpg'
import locomoco from './../Images/locomoco_square.jpg'
import tonkotsuramen from './../Images/tonkotsu_ramen.jpg'
import deepfriedoreos from './../Images/dforeos.jpg'
import RecipeData from './../Components/RecipeList.js'
import './Recipe.css'
import { Searchbar } from '../Components/Searchbar';
import PotStirAnimation from '../Components/PotStirAnimation';

const Recipe = () => {
    
    return(
        <> 
            
        
        <PotStirAnimation />

    <div className="recipe-list ">
    <h1 className='text-center text-red-600'>Delicious Dishes Await</h1>
        <Searchbar placeholder="Search Recipes" data={RecipeData}/>
        <Link to="/posts/broccoli_soup">
        <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={broccoli_soup} alt='broccoli_soup' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Broccoli Soup</h2>
            </div></Link>
            
        <Link to="/posts/chicken_parm">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={chickenparm} alt='chicken_parm' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Chicken Parmesan</h2>
            </div></Link>

        <Link to="/posts/grilled_cheese">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={grilledcheese} alt='grilled_cheese' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Grilled Cheese with Soup</h2>
            </div></Link>

        <Link to="/posts/bulgogi">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={bulgogi} alt='bulgogi' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Korean Bulgogi</h2>
            </div></Link>

        <Link to="/posts/ochicken">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={ochicken} alt='ochicken' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Orange Chicken</h2>
            </div></Link>

        <Link to="/posts/steak">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={steak} alt='steak' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Steak with Asparagus</h2>
            </div></Link>

        <Link to="/posts/japcurry">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={japcurry} alt='japcurry' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Japanese Curry</h2>
            </div></Link>

        <Link to="/posts/tonkatsu">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={tonkatsu} alt='tonkatsu' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Tonkatsu</h2>
            </div></Link>

        <Link to="/posts/shrimp_tacos">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={shrimp_tacos} alt='shrimp_tacos' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Shrimp Tacos</h2>
            </div></Link>

        <Link to="/posts/locomoco">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={locomoco} alt='locomoco' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Locomoco</h2>
            </div></Link>

        <Link to="/posts/tonkotsu_ramen">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={tonkotsuramen} alt='tonkotsu_ramen' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Tonkotsu Ramen</h2>
            </div></Link>

        <Link to="/posts/deep_fried_oreos">
            <div className="recipe border-2 border-black inline-flex rounded flex-col flex-wrap justify-center items-center">
            <img src={deepfriedoreos} alt='deep_fried_oreos' className='h-full w-full recipe-img' />
            <h2 className='recipe-title'>Deep Fried Oreos</h2>
            </div></Link>
    </div>
        </>
    ) 
}

export default Recipe;
