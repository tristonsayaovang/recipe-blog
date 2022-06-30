import { Outlet } from "react-router-dom"
import './Posts.css'


function Posts() {
    return(
        <>
        <div className="recipe-container
    ">
        <section className=" container-section ">
        <Outlet />
        </section>
            
            
            </div></>
    )
}

export default Posts