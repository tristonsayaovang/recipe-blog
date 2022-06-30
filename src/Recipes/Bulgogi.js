import { Cooktime } from "../Components/Cooktime";
import { Instructions } from "../Components/Instructions";
import PostHeading from "../Components/PostHeading";
import { PostIngredients } from "../Components/PostIngredients";
import { Potware } from "../Components/Potware";
import bulgogi from './../Images/bulgogi.jpg'


export function Bulgogi(props) {
    return (
        <>
        <PostHeading 
        title="Beef Bulgogi 불고기"
        image={bulgogi}
        description="My homage to the 2 semesters of Korean I took in college. I absolutely love Korean food and bulgogi is one my favorite dishes!"
        />

    <div className="flex-col w-full second-row">
        <PostIngredients
        ingredients={[
            '1lb Beef (fatty cut like a chuck roast or ribeye)', 'Garlic', '1 Apple', 'Scallions', 'White Jasmine Rice', '1/4 cup soy sauce', 'Sesame seeds (optional',
            '2 tbsp Gojujang paste (found at your local Asian grocer)', '1/4 cup Brown Sugar per pound of beef (err on less than more)', '1 tbsp Sesame oil', '1/4 cup Honey' 
        ]}
        />

        <Potware
        potware={['Frying Pan']}
        />

        <Cooktime
        cooktime="20 min prep, 2 hour marinade, 30 min cooktime"
        servingsize="2 servings per pound of beef"
        />
    </div>

    <Instructions 
    instructions={[
        `Step 1: Slice beef into small thin strips. It helps if you freeze the beef a little so it's stiffer when you cut into it. Or if you were to buy presliced slices
        of beef, that works too. Place into bowl`,

        `Step 2: Peel and grate an apple and add to bowl. Add minced garlic, soy sauce, gojujang paste, sesame oil, brown sugar, and honey. Mix thoroughly and leave
        covered in saran wrap in the fridge for 2 hours minimum (though preferably overnight).`,

        `Step 3: Once marinated, heat a pan to medium to medium-high heat. Be careful not to get too hot, as the sugar will end up burning instead of caramelizing. Once
        heated, add your sliced meat. Cook for 3-5 minutes, depending on how thinly you sliced your meat.`,

        `Step 4: Serve on a bed of rice and garnish with some chopped scallions and sesame seeds. Enjoy!`
    ]}
    />
        </>
    )
}