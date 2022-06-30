import { Cooktime } from "../Components/Cooktime";
import { Instructions } from "../Components/Instructions";
import PostHeading from "../Components/PostHeading";
import { PostIngredients } from "../Components/PostIngredients";
import { Potware } from "../Components/Potware";
import grilledcheese from './../Images/grilledcheese.jpg'


export function GrilledCheese(props) {
    return(
        <>
        <PostHeading 
        title="Grilled Cheese with Tomato Soup"
        image={grilledcheese}
        description="Easy to make comfort food for those cold nights. This soup was inspired by my time working at a coffee shop called CoffeeVille. 
        I worked there as a Hoagie Artist making sandwiches and serving food. This recipe reminded me of their tomato soup."
        />

    <div className="flex-col w-full second-row">

        <PostIngredients 
        ingredients = {['2 cans of canned tomatoes', 'Celery', 'Garlic', 'Tablespoon of tomato paste', 'Butter', 
        'White wine (optional)', 'Italian Seasonings (oregano, basil, etc.)', 'Brown sugar', 'Olive Oil', 'Bread', 'Cheese of your choice'
         ]}
        />

        <Potware 
        potware={['Blender', 'Frying Pan', 'Pot']}
        />

        <Cooktime
        cooktime="90 min"
        servingsize="6-8 people"
        />

    </div>
    <Instructions 
        instructions={[
            `Step 1: Chop garlic and celery into fine pieces. Heat your pot on a medium-high heat. Drizzle a few tsp of olive oil and drop in your chopped garlic and
            celery. Sautee for 1-2 minutes or until celery starts to become translucent`,

            `Step 2: Add 1 tablespoon of tomato paste to pot. Cook for an additional minute`,

            `Step 3: Add your canned tomatoes. Crush until mushy, then (optionall) add 1/2 cup of white wine. Reduce heat and bring to a gentle simmer and allow to cook and reduce for
            40 min - 1 hour, stirring occassionally to ensure the bottom doesn't burn`,

            `Step 4: Add 1/2 stick of butter (or the whole stick, I won't judge) for richness and to give the soup a nice glossy sheen. Cook for 2-3 more minutes, just enough
            to melt the butter`,

            `Step 5: Pour soup into a blender and blend to desired consistency. I usually prefer a smoother consistency if I'm going to be dipping grilled cheese in, and a 
            chunkier consistency if I'm eating it by itself. If you like it chunky, just blend less`,

            `Step 6: Time for the sandwich. Put together your grilled cheese sandwich and butter the outside`,

            `Step 7: Heat a pan to medium to medium-high and toast your grilled cheese until golden brown. Flip and cover pan with lid (I usually just use aluminum foil)
             to ensure the cheese is nice and melted. If you have a lot of cheese, feel free to add a splash of water before covering for extra steam.`,

             `Step 8: Once both sides are nice and toasted and the cheese is melty and gooey, cut diagonally(because that's the ONLY way grilled cheese should be cut) and serve.
             Dip in your homemade tomato sauce and enjoy!`
        ]}
    />

        </>
    )
}