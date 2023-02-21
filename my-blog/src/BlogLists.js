import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
  //  const blogs = props.blogs;
   // const title = props.title;
    //console.log(props,blogs)
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(myarr => (
            <div className="blog-preview" key={myarr.id} >
              <Link to={`/blogs/${myarr.id}`}>
              <h2>{ myarr.title }</h2>
              <p>Written by { myarr.author }</p>
              </Link>
              {/* <button onClick={()=>handleDelete(myarr.id)}> delete blog</button> */}
            </div>
          ))}

        </div>
       

     );
}
 
export default BlogList;