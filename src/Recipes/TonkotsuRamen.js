import  PostHeading from '../Components/PostHeading'
import { PostIngredients } from '../Components/PostIngredients'
import { Potware } from '../Components/Potware'
import { Cooktime } from '../Components/Cooktime'
import { Instructions } from '../Components/Instructions'
import ramen from './../Images/tonkotsu_ramen.jpg'

export function TonkotsuRamen(props){
 
 return (
    <>
    <PostHeading 
    title="Shio Tonkotsu Gyokkai Ramen"
    image={ramen}
    description="'Shio' means salt. 'Tonkotsu' means pork bone. 'Gyokkai' means seafood. All of these together get you an umami nuke. 
    Definitely the most complex and work intensive dish I've ever made in my entire life thus far. I've made it a few times now and here's what I would say:
    If you're only cooking to eat, don't make this. If you're looking to cool because you want to challenge yourself and experience something new, this is for you. Be 
    ready to commit 2 days to this single dish, that is, unless you want to cheat with a pressure cooker (which yields similar results). So good luck, I wish you the best."
    />
    <div className="flex-col w-full second-row">
         <PostIngredients 
            ingredients={[
                'For the broth:' ,'4lbs of pork bones', 'Pork belly or shoulder', 'Dried seafood of any kind (anchovies, shrimp, bonito flakes, etc)', 'Salt', 'Soy sauce and/or dark soy sauce',
                'Sugar', 'Mirin', 'Sake', 'Kombu (dried kelp)', '2-3 onions', '2-3 bunches of scallions', '1 whole ginger', '1-2 whole garlic',
                'Chicken skin or some type of animal fat', 'Chili flakes', 'MSG', 'Rice vinegar', 

                'For the noodles: ', '500g bread flour' , '200g water', '5g baked baking soda', '5g salt',

                'Toppings: ', 'Black woodear mushrooms', 'Nori (dried seaweed)', 'Fishcake' , 'Soy sauce marinated egg', 'Bamboo shoots (menma)'
            ]} 
             />

         <Potware 
            potware={[
                `2 Large pots`, `Frying pan`, 'Pasta roller/cutter'
            ]}
          />
          <Cooktime 
            cooktime="2 days of your time, effort, and life"
            servingsize="6-8 servings"
            />
  </div>
  <Instructions 
    instructions={[
     `(Day 1) Step 1: So on day 1, soak your pork bones in cold water overnight. This will allow the blood to drain and help get rid of any funk`,

     `(Day 1) Step 2: On a tray lined with aluminum foil, bake baking soda at 300 degrees F in the oven for an hour. You can store it pretty much indefintely, so I
     recommend making a big batch. Baking baking soda causes an alkaline reaction which results in a firmer, chewier noodle. Also, be careful not to touch it with your
     bare skin, as it will irritate it because of the high chemicals and stuff. Chemistry and whatnot`,

     `(Day 1) Step 3: Mix your flour, salt, and baked baking soda in a bowl. Slowly add your water and mix into a shaggy dough. It won't come together all at first, so
     keep mixing approximately 10-20 minutes or until everything comes together`,

     `(Day 1) Step 4: Roll into a flat sheet (1/2 inch thickness maximum) and allow dough to rest for 40min-1hr so the gluten can relax. Then, roll the dough again into
     and even flatter sheet. An easy way to do this is to put the dough in a Ziploc bag, into a paper bag, and just stepping on it a few times. Allow to rest again for another
     40min-1hr`,

     `(Day 1) Step 5: Once the dough is rested, roll out so that your dough is thin enough to pass through a pasta cutter. Pass through 2-3 times, folding in half with the
     end pieces going first. This is to align the gluten. Once you've reached desired thinness, cut into noodles. Dust with cornstarch to prevent stickage and let sit
    in fridge overnight`,

    `(Day 1) Step 6: For your tare(flavoring agent), cut kombu into small pieces. Along with your dried seafoods of choice, allow to sit in a container of cold water overnight for
    extraction. This is what brings the majority of the umami flavor. NOTE: if you use large dried anchovies, make sure you take the guts and stomach out, as this will
    end up making it taste a bit bitter`,

    `(Day 1) Step 7: To marinate your eggs, add equal parts sake, mirin, soy sauce, sugar, and water into a container (enough to submerge your eggs in). Boil your eggs
    for 6 and 1/2 minutes before placing in an ice bath to cool and stop the cooking process. This is so that the yolk will still be slightly runny and bright yellow`,

    `(Day 1) Step 8: Peel your eggs and add into your marinade, allowing to marinade overnight or longer. The longer you wait, the more the marinade will penetrate through
    the egg. It takes about 2 full days to fully cure the egg, making it brown throughout with a cured yolk. Tired yet? You've just finished Day 1`,

    `...`,

    `(Day 2) Step 1: The next day, dump the water from your pork bones. It should be blood red at this point. Clean and wash your pot, add your pork bones and fill with cold
    water. Bring to a boil and let boil for 30 minutes. This is to get rid of any impurities still within the pork bones. After 30 minutes, dump the water and wash your pork
    bones, making sure to clean any scum or foamy grey stuff left.`,

    `(Day 2) Step 2: One last time, dump your bones into the pot, fill with water, and bring to a boil. Keep at a rolling boil NOT a simmer. Cook for 12 hours, stirring 
    occasionally(about once or twice an hour) to ensure the bones at the bottom don't burn. This rolling boil is what causes the emulsification of the broth, turning it
    white and creamy. If you're running low on liquid, add more water. It's always okay to add more water, as we can just reduce it later if we add too much.`,

    `(Day 2) Step 3: Halfway through the cooking process (6 hours in), add in your garlic, onions, and ginger. If you decide to cheat and use a pressure cooker, pressure cook for 2-4 hours
    then boil in a pot for an additional 3`,

    `(Day 2) Step 4: For your chashu pork, cut the skin off the pork belly before rolling it in a cylinder shape, tying it with butcher's twine to maintain its shape
    while it cooks. Put into a pot filled with room temperature water and bring to a gentle boil for 30 minutes. Dump water and clean off any scum from your meat. Add 3
    cups of water or until pork belly is 3/4 submerged(this will depend on how wide your pot is). Add 1/2 cup of soy sauce, 1/2 cup of dark soy sauce(if you only have
    regular soy sauce, just add 1 cup total), 1/2 cup of sake, 1/2 cup of mirin, and 1 cup of sugar. Bring to gentle simmer for 90 minutes, turning occasionally to ensure
    all sides get coated`,

    `(Day 2) Step 5: After 90 minutes, add your garlic, ginger, and green onions to your chashu. Allow to simmer for another 90 minutes. Let cook on a wire rack and then place into
    a Ziploc bag and into a fridge to firm up. We want the chashu to be coldf, or else it'd fall apart when trying to cut it thinly. Keep in fridge until ready to be served.`,

    `(Day 2) Step 6: Taking your umami bomb liquid (your liquid with kombu and dried seafood), drain the water into a pot. Heat on low, add in 1 cup of salt, 1/4 cup of
    rice vinegar, 1/4 cup of mirin, and 1 tsp of MSG per 2 cups of liquid. The water shouldn't be hot enough to come to a simmer, just enough so that the salt dissolves 
    and everything can be incorporated. The end result should be something that tastes super super salty and fishy. Transfer into a container and allow to cool.`,


    `(Day 2) Step 7: Take your chicken skin (or whatever kind of animal fat), and add to a pot/pan. Barely cover with water and bring to a gentle simmer for an hour or
    until most of the fat is rendered. Drain into another pan so there's no water. You'll literally be able to ladle most of it out, but you can also use a fat separator.
    Add chili flakes, garlic, and scallions. You could optionally add vegetable oil as well if you wanted more volume. Heat on low for 20-30min or until your aromatics are softened. Strain
    into a container, keeping only the oil`,

    `(Day 2) Step 8: Prep any additional toppings, whatever those may be (slicing your scallions, rehydrating and cooking your woodear mushrooms, cutting your fishcake, etc)`,

    `(Day 2) Step 9: Strain your broth into another pot, keeping only the liquid, which should be white and creamy. It shouldn't taste like much, mainly porky with a nice
    mouth-feel. Your tare will do most of the flavoring.`,

    `...`,

    `Serving: Yes, there is an entire section on how to serve ramen. It's actually a bit complicated.`,

    `Step 1: Organization is key. Have a pot of boiling water (to cook your noodles), your broth, your tare, your aromatic oil, and your toppings laid out neatly`,

    `Step 2: Ladle your bowl with boiling water. This is to keep the bowl warm so that your ramen won't lose its heat as quickly when everything comes together. Dump water back into pot
    once your bowl is heated.`,

    `Step 3: Cook for noodles for 2-3 minutes depending on their thickness. While your noodles are cooking, ladle your broth into your bowl. Add in one spoonful of tare
    at a time, tasting until you reach your desired saltiness. By this time, your noodles should be done cooking. Time to strain them.
     Make sure you get as much water out from your noodles as possible while straining them
    to prevent any dilution of your broth. You literally spent 2 days making this so you deserve to enjoy it at its fullest potential.`,

    `Step 4: Add 1 tbsp of your aromatic oil(or more if you want), your various desired toppings (chashu, scallions, mushrooms, fishcake, nori, etc.) as well as your
    marinated egg cut in half.`,

    `Step 5: Take a moment to enjoy the results of your 2 dayas work. This isn't just food, it's an art. Make sure you take a photo and post it on the 'gram and Facebook.
    Serve and enjoy with friends and family. Itadakimasu!`

    ]}
  />

    </>
    )
}