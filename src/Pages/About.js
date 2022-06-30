
import me from './../Images/me.JPG'
import './About.css'
import ramen from './../Images/tonkotsu_ramen.jpg'
import curry from './../Images/japcurry.jpg'
import chickenparm from './../Images/chickenparm.jpg'
import MailingList from '../Components/MailingList'

const About = () => {
    return(
        <>

        <div className='containerofcontainer mt-4'>
        <div className='container'>
                 <img src={me} alt='triston' 
                    className='me'/>

               
       <section className='text'>
           <h2 class='text-red-600 font-bold text-2xl'>About Me</h2>
           <br/>
            <p>  
            Hi! My name is Triston and I've been cooking since the age of 8 years old.
            I'm not a professional chef or anything, but I've had my fair share of making a vast 
            variety of dishes. I love cooking because well, I love eating
            (who doesn't?).</p><br/>

        </section>
    </div>
</div>
<section className='containerofcontainer pb-8'>
    <h2 class='text-red-600 font-bold text-2xl w-full mt-8 ml-8'>This Blog</h2>
    <p className='text second'>
            From a work-intensive 2-day shio tonkotsu gyokkai ramen to an easy weeknight chicken parm, I've got you covered!
            Throughout the years, I've discovered the flavors I enjoy and I'm hoping to share them with you! 
            When I tell people that I love cooking, they always ask "What do you cook?",
            so I decided to create this recipe blog to share exactly that! All the images of food you see on this blog are all food made by me.
            <br/><br/>
            Here are a few of my personal favorites:  
    </p>
            <br/> 
            
            <aside className='food_images'>

            <div className='food flex-col justify-center items-center'>
                <img className='ramen' src={ramen} alt='ramen' name='ramen' />
                <h3 class='text-center'>Shio Tonkotsu Gyokkai Ramen</h3>
            </div>

            <div className='food'>
            <img className='ramen' src={curry} alt='curry' />
            <h3 class='text-center'>Japanese Curry</h3>
            </div>

            <div className='food'>
            <img className='ramen' src={chickenparm} alt='chickenparm' />
            <h3 class='text-center'>Chicken Parmesan</h3>

            </div>


            </aside>
</section>
            <section className='containerofcontainer pb-8'>
            <h2 class='text-red-600 font-bold text-2xl w-full mt-8 ml-8'>My Cooking Philosophy</h2>
    <p className='text'>
            So a little bit about my cooking philosophy: If it tastes yummy, it is correct. Home cooking doesn't need to be 
            fancy and the recipe doesn't have to be strict. You can substitute most ingredients with something similar.
            As long as it tastes good in the end, that's all that matters. Additionally, I'm not a really huge fan of measurements. 
            The ones provided are just basic recommendations I came up with (totally not off the top of my head).
            <br/> <br/>
            Feel free to add more of what you like and less of what you don't. Forget what the "traditional" way is and don't let anyone 
            look down on you for the way you enjoy your food. You're the one eating it after all. Do what you like and enjoy some delicious 
            recipes! Happy cooking!
    </p>
    </section>
 
   
  
<MailingList />
        </>
    )
}
export default About;