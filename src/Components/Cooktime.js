import { RiTimerFill } from 'react-icons/ri'

export function Cooktime(props){
    return(
        <div className="second-row-items border-b-red-600 border-b-2">
            <section className='second-row-title'>
                <h2 className='text-red-600 text-xl m-4'>
                    <RiTimerFill className='second-row-icons'/>
                    Cooktime and Servings
                </h2>
        </section>
        <ul className=" ml-8 ingredient_list">
            <li>Cooktime: {props.cooktime}</li>
            <li>Serving Size: {props.servingsize}</li>
        </ul>
        </div>
    )
}