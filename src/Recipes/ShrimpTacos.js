import { Cooktime } from "../Components/Cooktime";
import { Instructions } from "../Components/Instructions";
import PostHeading from "../Components/PostHeading";
import { PostIngredients } from "../Components/PostIngredients";
import { Potware } from "../Components/Potware";
import staco from './../Images/shrimptaco.jpg'

export function ShrimpTacos(props){
    return (
        <>
        <PostHeading 
        title="Shrimp Tacos"
        image={staco}
        description="Easy simple healthy weeknight dinner. Who doesn't like tacos?"
        />
        <div className="flex-col w-full second-row">
             <PostIngredients 
                ingredients={[
                    `Shrimp`, 'Small corn or flour tortillas', 'Rice (any kind)', 'Onions', 'Black beans', 'Bell peppers', 'Chili powder', 'Garlic powder', 'Garlic', 
                    'Paprika', 'Lime', 'Cilantro', 'Sour cream (optional)', 'Tobasco sauce (optional)'
                ]} 
                 />
    
             <Potware 
                potware={[
                    'Frying pan', 'Rice cooker or pot'
                ]}
              />
              <Cooktime 
                cooktime="45 minutes"
                servingsize="1 serving per 3 tacos"
                />
      </div>
      <Instructions 
        instructions={[
            `Step 1: Marinate your shrimp with salt, pepper, garlic powder, chili powder, and paprika in a bowl. Mix and let marinade for 30 min-1hr`,

            `Step 2: Finely dice onions and garlic. Heat pan to medium-high heat and drizzle olive oil. Fry onions for 1-2 min or until translucent. Drain beans from can
            and add to pan. Season wtih salt and pepper. Cook for 4-5 minutes or until beans are squishy squishy soft.`,

            `Step 3: Cook rice in your rice cooker(or pot), then transfer rice into a large bowl. Chop cilantro finely and mix in with rice and add 1/3 cup of lime juice per cup of rice,
            but I don't think it's worth measuring. Just taste and decide if you want more or less.`,

            `Step 4: Heat pan on high heat and drizzle olive oil. Add shrimp and cook for 2-3 minutes.`,

            `Step 5: Heat tortillas in a pan or microwave and then assemble your taco. My recommendation is smearing a small amount of sour cream on the bottom so your filling
            will have something to stick to and won't fall out. Add your rice, beans, and shrimp. Top with cilantro and squeeze lime and tobasco sauce over. Enjoy!`
    
        ]}
      />
    
    
        </>
    
        )
}