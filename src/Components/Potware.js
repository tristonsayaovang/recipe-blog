import './../Pages/Posts.css'
import { GiWok } from 'react-icons/gi'

export function Potware(props) {
    return(
        <div className='border-b-red-600 border-b-2 second-row-items'>
            <section className='second-row-title'>
             <h2 className='text-red-600 text-xl m-4'><GiWok className='second-row-icons' />Potware</h2>
             </section>
            <ul>
                {props.potware.map(pots => {
                    return <li className='ingredient_list ml-8' key={pots}>{pots}</li>
                })}
            </ul>
        </div>
    )
}