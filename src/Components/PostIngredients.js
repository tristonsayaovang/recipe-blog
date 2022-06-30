import './../Pages/Posts.css'
import { BiNotepad } from 'react-icons/bi'

export const PostIngredients = (props) => {
    return(
        <>
        <div className='ingredients second-row-items border-b-red-600 border-b-2'>
            <section className='second-row-title'>
                <h2 className='text-red-600 text-xl m-4'><BiNotepad class='second-row-icons' />Ingredients</h2>
                
            </section>
        <ul>
            {props.ingredients.map(list => {
                return <li className='ingredient_list ml-8' key={list}>{list}</li>
            })}
           
        </ul>
        </div>
        </>
    )
}
