import './Home.css'
import Slider from "../Components/Slider";
import SliderData from '../Components/SliderData';
import LatestAdditions from '../Components/LatestAdditions';
import MailingList from '../Components/MailingList';





const Home = () => {
    
return(
    <>
    <div class='home-slider-div'>
    <Slider slides={SliderData} class='justify-self-center items-center slider' />
    </div>
    

    <h1 className='text-center text-red-600 w-full home-latest'>Latest Additions</h1>
    <div className='latest-additions-container'>
    <LatestAdditions />
    </div>
    
    
    <MailingList /> 
</>
)
}

export default Home;