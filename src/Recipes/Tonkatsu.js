import  PostHeading from '../Components/PostHeading'
import { PostIngredients } from '../Components/PostIngredients'
import { Potware } from '../Components/Potware'
import { Cooktime } from '../Components/Cooktime'
import { Instructions } from '../Components/Instructions'
import tonkatsu from './../Images/tonkatsu.jpg'


export function Tonkatsu(props){
    return (
        <>
        <PostHeading 
        title="Tonkatsu with Japanese Salad"
        image={tonkatsu}
        description="'Tonkatsu' means 'pork cutlet'. Not to be confused with 'TonkOtsu' which means 'pork BONE'. This recipe is pretty straightforward and easy to make.
        Think of it as almost a Japanese style chicken-fried steak."
        />
        <div className="flex-col w-full second-row">
             <PostIngredients 
                ingredients={[
                    'Boneless pork chop(can also be done with chicken thighs)', 'Panko bread crumbs', 'Flour', '2 eggs', 'Vegetable oil', 'Cabbage', 'Ketchup', 'Oyster Sauce',
                    'Worcestershire sauce', 'Rice Vinegar', 'Ginger', '2 cloves of garlic' ,'Half a carrot, or 1 baby carrot', 'Japanese mayo (or normal mayo with rice vingear added)',
                    '1/4 cup of sugar'
                ]} 
                 />
    
             <Potware 
                potware={[
                    'Large pot, pan, or deep fryer. Basically anything you can shallow fry in'
                ]}
              />
              <Cooktime 
                cooktime="60 minutes"
                servingsize="1 serving per 2 tonkatsu"
                />
      </div>
      <Instructions 
        instructions={[
         `Step 1: Heat oil to 350 degrees F. As you wait for it heat, gather 3 bowls: 1 bowl filled with flour, another with 2 whisked eggs, and 1 with panko bread crumbs`,

         `Step 2: Dip your cutlet into the flour, then to the egg, then to the panko, shaking off any excess in between.`,

         `Step 3: Cook in your heated pan/pot/deep fryer for 6-8 min or until a light golden brown. Place on a wire rack to cool and drain excess oil.`,

         `Step 4: Cut cabbage into long thin strips.`,

         `Step 5: For the salad dressing, add 1/2 cup of Japanese mayo, 1 tbsp of rice vinegar, 1 tsp of siracha, 1 tsp soy sauce, 1 grated garlic clove, a grated tiny knob of ginger (should be about 1-2 tsp when grated),
         and mix. The dressing should be slightly runnier than the consistency of ranch.`,

         `Step 6: For the tonkatsu sauce, add 1/2 cup of oyster sauce, 1/2 cup of ketchup, 1/4 cup of soy sauce, 1/4 cup of rice vinegar, 1/4 cup of sugar, 2 tbsp of Worcestershire sauce,
         and 1 tsp of sesame oil and mix.`,

         `Step 7: Serve your tonkatsu with rice, your salad and dipping sauce. Enjoy!`
    
        ]}
      />
    
    
        </>
    
        )
}