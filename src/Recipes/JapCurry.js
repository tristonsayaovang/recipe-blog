import  PostHeading from '../Components/PostHeading'
import { PostIngredients } from '../Components/PostIngredients'
import { Potware } from '../Components/Potware'
import { Cooktime } from '../Components/Cooktime'
import { Instructions } from '../Components/Instructions'
import japcurry from './../Images/japcurry.jpg'

export function JapCurry(props) {
    return (
        <>
        <PostHeading 
        title="Japanese Curry"
        image={japcurry}
        description="A warm hearty meal comforting for the soul. This dish is perfect for those cold snowy days where you're stuck inside. Something about cooking a nice
        warm stew/curry while it's cold is so satsifying. This dish is also a good way to use up any food before it goes bad, as the recipe is extremely flexible. You 
        can basically add whatever you want. This recipe is just a version I've made myself. The only thing you'll absolutely need is a Japanese curry block package. 
        You can try and make the roux from scratch yourself, but I realy don't think it's worth the time and effort when you can literally buy it for $3 at Walmart, 
        but hey, you do you."
        />
        <div className="flex-col w-full second-row">
             <PostIngredients 
                ingredients={[
                    '1 package Japanese curry block', '1-2lb meat of your choice (I recommend pork shoulder)', '2-3 carrots', 
                    '2 large potatoes or 4 small potatoes or 3 medium potatoes (you do the potato math)', '2 bunches of scallions (one for cooking and one for garnish)',
                    '4 cups of chicken stock (preferably low-sodium)', '4 cups of water (or enough to cover the ingredients in the pot)', 
                    'Vegetable or canola oil', '4 garlic cloves', '2 large onions', 'Honey or brown sugar',
                    '1 apple', '1-2 cups of milk or heavy cream'
                ]} 
                 />
    
             <Potware 
                potware={[ 'A large pot'
                    
                ]}
              />
              <Cooktime 
                cooktime="90 minutes"
                servingsize="6-8 servings"
                />
      </div>
      <Instructions 
        instructions={[
         `Step 1: Cut meat into small bitesized cubes`,

         `Step 2: Heat pot to medium-high heat and drizzle oil. Add meat, onions, and garlic.. Cook for 3-4 minutes or until meat is browned and onions are 
         translucent`,

         `Step 3: Chop carrots and potatoes into chunks and add to pot. Add water and chicken stock. Heat to boil and add your curry block, stirring until dissolved.
         Simmer for 40-90 minutes or until you can easily pierce your carrots and potatoes with a fork. Stir occasionally to prevent the bottom from burning`,

         `Step 4: Add a splash of milk or creme. Your curry should be thick, but not overbearingly so. You can always add more water if it's too thick. If it's too runny, 
         continue to simmer until you reach your desired consistency, though this risks your vegetables going mushy. Add a finely grated apple and 1-2tbsp of honey OR
         4 tbsp of brown sugar`,

         `Step 5: Cook for 3-5 minutes to incorporate and serve over a bed of white rice. Garish with chopped scallions and enjoy!`
    
        ]}
      />
        </>
    )
}