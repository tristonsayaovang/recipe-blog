import  PostHeading from '../Components/PostHeading'
import { PostIngredients } from '../Components/PostIngredients'
import { Potware } from '../Components/Potware'
import { Cooktime } from '../Components/Cooktime'
import { Instructions } from '../Components/Instructions'
import locomoco from './../Images/locomoco1.JPG'

export function Locomoco(props){
    return (
        <>
        <PostHeading 
        title="Locomoco with a Honey Soy Fish Sauce Reduction"
        image={locomoco}
        description="This recipe is not by any means traditional. Just my twist and take on locomoco with common ingredients I normally have in the kitchen. For those of
        you who've never heard of locomoco, it's basically a hamburger patty served on rice topped with a fried egg."
        />
        <div className="flex-col w-full second-row">
             <PostIngredients 
                ingredients={[
                    '1lb ground beef (makes 3 1/3lb patties but probably less since the fat renders)', 'Eggs', 'White jasmine rice' , '1 bunch of scallions', '1/4 cup sugar/brown sugar', '2 tbsp honey' , '1/3 cup soy sauce',
                    '2 tbsp fish sauce', 'Furikake (optional)', '1/4 cup Rice vinegar(optional)'
                ]} 
                 />
    
             <Potware 
                potware={[
                    'Frying pan', 'Rice cooker or pot'
                ]}
              />
              <Cooktime 
                cooktime="45 minutes"
                servingsize="3 servings per pound of beef"
                />
      </div>
      <Instructions 
        instructions={[
            `Step 1: Wash and drain 3 cups of uncooked rice until water is clear/almost clear. Cook in your rice cooker. If cooking in a pot, add 6 cups of water or
            until rice is submerged 1/2 inch under.`,

            `Step 2: For your sauce, pour your soy sauce, fish sauce, sugar, and honey into a pot. Reduce on a low to medium-low heat, stirring so all the sugar dissolves.
            Once its volume is reduced by half, add a small splash of rice vinegar. Just a teeny one. Reduce for another minute
            and it's done. You can also always add water if you reduce it too much. The final product should taste sweet, savory, and a little sour.`,

            `Step 3: When your rice has finished, spread it out on a wide bowl. Mix 2 tbsp of brown sugar with 1/4 cup of rice vinegar, stirring until dissolved. Mix this
            into your rice and add your furikake. NOTE: While mixing, you don't want to crush the rice, as it will make it mushy. 
            Instead, using a diagonal cutting motion, then fold over the rice. 
            This way, you can still evenly incorporate your vinegar mixture and furikake evenly while still having fluffy rice.`,

            `Step 4: For your patties, form ground beef into 1/3lb patties (or however big or small you want really). Season
            both sides with salt and pepper.`,

            `Step 5: Heat your pan on high and cook your patties for 3-4 minutes each side depending on how thick they are. Allow to rest for 2-3 minutes. In this time,
            you can cook your egg.`,

            `Step 6: You can cook your egg however you want it, sunny-side up, poached, scrambled. etc. It's totally up to you.`,

            `Step 7: Assemble your locomoco: a bed of your rice, your burger patty, your egg, top with sliced scallions, and drizzle with your sauce reduction. Enjoy!`
    
        ]}
      />
    
    
        </>
    
        )
}