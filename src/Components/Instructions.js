import './../Pages/Posts.css'


export function Instructions(props){
    return (
        <div className="instructions">
            <h2 className='text-red-600 text-xl m-4'>Instructions</h2>
            <ul>
            {props.instructions.map(list => {
                return <p className='instructions' key={list}>{list}</p>
            })}
           
        </ul>
        </div>
    )
}