import { Cooktime } from "../Components/Cooktime";
import { Instructions } from "../Components/Instructions";
import PostHeading from "../Components/PostHeading";
import { PostIngredients } from "../Components/PostIngredients";
import { Potware } from "../Components/Potware";
import ochicken from './../Images/ochicken.jpg'

export function Ochicken(props) {
    return (
        <>
        <PostHeading
        title="Orange Chicken"
        description="Craving Chinese food but too lazy to DoorDash Panda Express in the comfort of your own bedroom while laying down on your bed watching cute capybara
        videos on YouTube? Work two times as hard by making your own orange chicken!!! ..... seriously though, this recipe is only worth making if you're doing a big batch."
        image={ochicken}
        />

<div className="flex-col w-full second-row">
    <PostIngredients
        ingredients={[
            '2lbs Chicken Thighs (or breasts)', '1 Egg', '1/2 cups corn starch', '1/4 cup flour', '1/4 cup water', '2 Oranges', '1/4 cup soy sauce', 
            '2 tbsp vinegar', '1/4 cup brown sugar', '1/4 cup white sugar', 'Chili flakes', '1 knob of ginger', '4 cloves of garlic', '1 tbsp sesame oil', 
            'Scallions (optional)', 'Sesame seeds (optional)', 'Vegetable oil (enough to deep fry your chicken in)'
        ]}
    />

    <Potware 
    potware={['Pot or deep fryer', 'Wok or large frying pan']}
    />

    <Cooktime 
    cooktime="90 min"
    servingsize="6-10 people"
    />

    </div>


    <Instructions
        instructions={[
            `Step 1: Mix 1/2 cup of corn starch, 1/4 cup of flour, 1/4 cup of water, and an egg in a bowl. The consistency should be like a thick pancake batter. The
            cornstarch allows for the chicken to get crispier while still having a flour coating.`,

            `Step 2: Slice meat into bite-sized pieces and mix into your batter. Cover with saran wrap and let chill in the fridge for at least 30 min. This is just to
            chill the chicken so that when you deep fry it, the chicken will still be juicy while the outside will get crispy. Because science.`,

            `Step 3: Heat oil in your pot/deep fryer to 350 degrees F or a medium-high heat if you don't have a way to measure the temperature. Add in your pieces of chicken
            in small batches, being sure not to overcrowd the pot. Cook for 5-6 minutes or until a golden brown. Your chicken will turn a shade darker once rested. NOTE: Scoop
            out as much of the excess pieces of batter as you can in between batches. If you don't, they'll burn and dirty up your oil`,

            `Step 4: Once cooked, move chicken to a wirerack(or bowl with a paper towel) and let cool/drain excess oil`,

            `Step 5: For your sauce, grate/finely mince 4 cloves of garlic and your small knob of ginger`,

            `Step 6: Heat your pan/wok to a medium heat.  Add 1 tbsp of sesame oil and fry garlic and ginger with a pinch of chili flakes. This is to infuse the flavors 
            together to make an aromatic oil. Cook around 1-2 minutes`,

            `Step 7: Add both your brown and white sugar and 1/4 cup of soy sauce. Mix until sugar is dissolved`,

            `Step 8: Add 1/3 cup of vinegar and the juice and zest of 1 orange. Cook for an additional minute`,

            `Step 9: In a cup, mix 2 tbsp of cornstarch and 2 tbsp of water to make a thickener for your sauce. We do this in a cup to prevent big lumps from forming
            if we were to add it directly to our sauce. Add little by little until you reach your desired consistency. It doesn't take too much, so you probably won't
            have to use the entire mixture`,

            `Step 10: Add your rested chicken and toss thoroughly until evenly coated. Serve with white rice and enjoy the fruits of your hard labor!`
        ]}

    />
        </>
    )
}