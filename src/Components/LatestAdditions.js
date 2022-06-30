import { Link } from 'react-router-dom';
import RecipeList from '../Components/RecipeList';
import "./LatestAdditions.css"

const LatestAdditions = () => {
return(
    <>
    
   {RecipeList.slice(-3).map((recipes, index) => {
       return (<>
       
       <div key={index} className="latest-additions">
           <Link to={recipes.link}>
        <h3>{recipes.title}</h3>
           <img src={recipes.image} alt="food" className='latest-additions-imgs'/>
           </Link>
        </div>
           
           
           </>
       )
   })


   }

   </>
)
}

export default LatestAdditions