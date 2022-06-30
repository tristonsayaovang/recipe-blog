import steak from './../Images/steak.jpg'
import  PostHeading from '../Components/PostHeading'
import { PostIngredients } from '../Components/PostIngredients'
import { Potware } from '../Components/Potware'
import { Cooktime } from '../Components/Cooktime'
import { Instructions } from '../Components/Instructions'


export function Steak(props) {
    return(
        <>
        <PostHeading 
    title="Steak with Asparagus and Mushrooms"
    image={steak}
    description="A nice dinner perfect for date night. Or lonely nights. Or any night in general."
    />
    <div className="flex-col w-full second-row">
         <PostIngredients 
            ingredients={[
                'Steak of your choice', '4 cloves of garlic', 'Thyme or Rosemary', 'Parsely', 'Asparagus', 'Mushrooms of your choice (button mushrooms work fine',
                '1 stick of butter', 'Canola or vegetable oil'
            ]} 
             />

         <Potware 
            potware={['Frying pan or cast iron pan']}
          />
          <Cooktime 
            cooktime="20-30 minutes. Butter you can do in advance"
            servingsize="1 serving per steak"
            />
  </div>
  <Instructions 
    instructions={[
        `Step 1: Let your butter rest to room temperature so it's soft and easily moldable.`,

        `Step 2: Finely mince garlic, herbs, and parsley. Incorporate with softened butter. Wrap in saran wrap and wind into cylinder shape. Let stiffen in freezer until
        it's firm again.`,

        `Step 3: Season your steak with salt and pepper, letting the steak rest to room temperature (usually about 10-20 min)`,

        `Step 4: Heat pan on high heat and add oil. Some people use olive oil, but since it has a lower smoke point, you can't get as good of a sear with vegetable or canola
        oil.`,

        `Step 5: Lay steak(away from you) in a pan and cook until desired doneness. This will depend on how thick your steak is. For a 1 inch steak, rare is about 2 minutes
        each side. Every following minutes is a extra level of "doneness" (ie 3 min = medium rare, 4 min = medium, etc.). Some people flip their steak only once, others
        flip multiple times. I honestly don't think it matters that much. Do what works for you`,

        `Step 6: Halfway through, add a knob or two of your compound butter. Baste your steak. You can additionally add more garlic and herbs to the pan, but since
        your compound butter is already infused with the flavors, it doesn't really make that much of a difference.`,

        `Step 7: Let rest for at least 5 min before eating. During this time you can cook your veggies.`,

        `Step 8: Heat pan on high and add oil. Add your vegetables and sautee until asparagus skin is blistered and mushrooms are sweated. Usually around 5ish minutes of cooking`,

        `Step 9: Add your compound butter to finish. Cook for an additional minute until butter is melted and then serve with your steak. Enjoy!`



    ]}
  />
  </>
    )
}