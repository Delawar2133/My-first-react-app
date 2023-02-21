import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My first Blog in ract Js   </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                {/* <a href="/">Home</a>
                <a href="/create">New Bolog</a> */}

       </div>
        </nav>


     );
}
 
export default Navbar;