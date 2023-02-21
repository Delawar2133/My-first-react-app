
import BlogList from "./BlogLists";
import useFetch from "./useFetch";


const Home = () => {
  //use state

  const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  //   { title: 'My new website', body: 'lorem ipsum1...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum.2..', author: 'yoshi', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ]);


  // const handleDelete = (id) =>{
  //     const newBlogs = blogs.filter(blogs => blogs.id !== id);
  //     setBlogs(newBlogs);
  // }
  // const [name, setName] = useState('Delawar');
  


  return (
    <div className="home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading......</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" ></BlogList>}
      {/* {blogs && <BlogList blogs={blogs} title ="All blogs!" handleDelete={handleDelete}></BlogList>} */}
      {/* <button onClick={()=> setName('Shah')}>change name</button>
        <p>{name}</p> */}



      {/* <BlogList blogs={blogs.filter((blog)=> blog.author ==="mario")} title ="mario blogs"></BlogList> */}



    </div>
  );
}

export default Home;