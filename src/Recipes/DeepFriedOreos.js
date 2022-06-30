import  PostHeading from '../Components/PostHeading'
import { PostIngredients } from '../Components/PostIngredients'
import { Potware } from '../Components/Potware'
import { Cooktime } from '../Components/Cooktime'
import { Instructions } from '../Components/Instructions'
import dforeos from './../Images/dforeos.jpg'

export function DeepFriedOreos(props){
    
 return (
    <>
    <PostHeading 
    title="Deep Fried Oreos"
    image={dforeos}
    description="I must confess, I have a weakness for Oreos. One time in college, I ate an entire FAMILY sized pack of Oreos in one day.....all because there was no one
    there to stop me. So I might be a little biased when I say these are the most delicious things you could ever deep fry."
    />
    <div className="flex-col w-full second-row">
         <PostIngredients 
            ingredients={[
                '1 package of Oreos', '3 cups of pancake mix', '2 eggs', '1 1/2 cups of milk', 'Whipped cream', 'Powdered sugar', 'Vegetable oil (enough to deep fry in)'
            ]} 
             />

         <Potware 
            potware={[
                'A large pot or deep fryer'
            ]}
          />
          <Cooktime 
            cooktime="30 minutes"
            servingsize="Technically, one serving size of Oreos is 3 Oreos.....but there's NO way you're just gonna eat 3 right?"
            />
  </div>
  <Instructions 
    instructions={[
        `Step 1: Heat oil to 350 degrees F`,

        `Step 2: Mix pancake mix and liquid ingredients until a smooth batter is formed`,
        
        `Step 3: Dip Oreos to coat, shaking off any excess, and fry for 3-4 minutes or until golden brown`,

        `Step 4: Let cool on a wire rack or a plate with paper towel to drain excess oil`,

        `Step 5: Top with powdered sugar, whipped cream, and serve with ice cream and any other additional toppings. Enjoy responsibly.`

    ]}
  />

  
    </>
 )
}