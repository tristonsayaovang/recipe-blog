import  PostHeading from '../Components/PostHeading'
import { PostIngredients } from '../Components/PostIngredients'
import { Potware } from '../Components/Potware'
import { Cooktime } from '../Components/Cooktime'
import { Instructions } from '../Components/Instructions'
import chickenparm from './../Images/chickenparm.jpg'


const ChickenParm = () => {
    return (
        <>
        <PostHeading 
        title="Chicken Parmesan with Linguini"
        image={chickenparm}
        description="Classic hearty Italian dish that's simple to make. You can use any kind of pasta you want, but I personally like linguini the best. It's perfect amount
        of flatness with chewiness."
        />
        <div className="flex-col w-full second-row">
             <PostIngredients 
                ingredients={[
                    'Chicken breasts of thighs', 'Linguini (or any pasta of your choice)', 'Canned tomatoes', 'Oregano', 'Dried Basil', 'Fresh basil (optional)',
                    'Flour', 'Parmesan cheese', 'Mozzarella cheese', 'Vegetable oil', '4 cloves of garlic or garlic powder', '2 eggs', '1/4 cup of sugar', 'Balsamic vinegar', 
                    'White wine (optional)' 
                ]} 
                 />
    
             <Potware 
                potware={[
                    'Frying pan', 'Large pot'
                ]}
              />
              <Cooktime 
                cooktime="90 minutes"
                servingsize="1 serving per chicken breast (or 2 chicken thighs)"
                />
      </div>
      <Instructions 
        instructions={[
         
            `Step 1: Pour your canned tomatoes into a pot. Heat on medium and crush them to desired consistency. Add sliced garlic (or 2-3 tbsp of garlic powder), spices,
            1/3 cup of white wine(optional) and reduce for 40 minutes or until desired consistency. Add your sugar and a splash of balsamic vinegar and season with salt
            and pepper to taste`,

            `Step 2: If using a large chicken breast, butterfly it. You can usually leave chicken thighs as is. Have one bowl with whisked egg and one bowl with flour.
            Dip your meat into the eggs and then coat with flour, shaking off any excess. Heat oil in a pan on medium to medium-high heat and cook for 5-6 minutes on each
            side or until golden brown. Transfer to wire rack or plate with paper towel to drain excess oil.`,

            `Step 3: Boil water in a pot, add a few pinches of salt, and cook your pasta according to its box instructions. Make sure to stir occasionally so the pasta
            doesn't stick to the bottom. When your pasta is done cooking, add a ladle or two of your pasta water to your sauce. The starch will help make your sauce pasta 
            saucier (is that a word?), But make sure to still reduce your sauce to your desirec consistency.`,


            `Step 4: Add your mozzarella on top of your fried chicken cutlet. Place into an oven-safe tray and broil in oven until cheese is melted.`,

            `Step 5: Assemble your dish. Pasta with your chicken cutlet on top, sauce, top with paremsan cheese, and garnish with basil. Enjoy!`
    
        ]}
      />
    
    
        </>
    
        )
    }
export default ChickenParm