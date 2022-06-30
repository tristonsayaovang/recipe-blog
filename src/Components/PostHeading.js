import './../Pages/Posts.css'

const PostHeading = (props) =>{
    return (
        <div className="w-full post-container border-b-red-600 border-b-2 bg-slate-200">
            <aside className=" heading h-full text-center ">
                <h2 className="text-red-600 ml-3">{props.title}</h2>
                <img src={props.image} alt="recipe_image" className="recipe-picture m-3"/>
            </aside>
            <aside className="h-full description">
                <p>{props.description}</p>

            </aside>
        </div>
    )

}

export default PostHeading