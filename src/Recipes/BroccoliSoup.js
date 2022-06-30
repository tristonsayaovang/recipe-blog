import { Cooktime } from "../Components/Cooktime";
import { Instructions } from "../Components/Instructions";
import PostHeading from "../Components/PostHeading";
import { PostIngredients } from "../Components/PostIngredients";
import { Potware } from "../Components/Potware";
import broccoli_soup from './../Images/broccoli_soup.jpg'
import './../Pages/Posts.css'




function BroccoliSoup(props) {

    return (
    <>
    <PostHeading 
    title="Broccoli Soup"
    image={broccoli_soup}
    description="Here's an extremely easy and simple recipe that anyone can make. This broccoli soup is one of the simplest
     yet most delicious soups I've ever had. It's literally just broccoli and water, but it tastes so much more complex than that somehow.
    I found this recipe on YouTube with Gordon Ramsay making it. Really goes to show that sometimes simplicity is best"
    />
    <div className="flex-col w-full second-row">
         <PostIngredients 
            ingredients={['Broccoli', 'Water', 'Cheese of your choice (I recommend Mozzarella)', 'Olive oil']} 
             />

         <Potware 
            potware={['Pot', 'Blender']}
          />
          <Cooktime 
            cooktime="15 minutes"
            servingsize="3-4 people per 1lb of broccoli florets"
            />
  </div>
  <Instructions 
    instructions={[
      `Step 1: Fill a pot with enough water to cover all of your broccoli. Bring to a boil on stove while you chop your broccoli stems off, leaving only
      florets. You can optionally save these stems for use in stocks or stews if you want`,

      `Step 2: When the water comes to a harsh boil, dump in your broccoli florets. Cover the pot with a lid, as we want maximum heat to cook as fast as possible`,
 
      `Step 3: Let cook for 2-3 minutes or until the broccoli is a dark green color. If you can easily cut through with a pairing knife with a little resistance, 
      that's perfect`,

      `Step 4: While still hot, retrieve your broccoli from your pot and dump into a blender. NOTE: Do NOT dump your broccoli water, as it will be the liquid component
      of your soup. Blend and add your broccoli little by little until you reach your desired liquid consistency. It's important to do this while the broccoli and liquid is
      still hot, or else the broccoli will go grainy`,

      `Step 5: Season with salt and pepper to taste. Serve with cheese of your choice and drizzle with olive oil. Enjoy!`

    ]}
  />
    </>
    )
}

export default BroccoliSoup;