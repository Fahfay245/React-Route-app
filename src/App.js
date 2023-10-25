
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import Header from "./Header";
import Footer from "./Footer";
import Missing from "./Missing";
import { useState, useEffect } from "react";

import Nav from "./Nav";
import NewPost from "./NewPost";
import { format } from "date-fns";
import { Route, Routes, useNavigate } from "react-router-dom";
import PostPage from "./PostPage";

function App() {
  const [posts, setposts] = useState([
    {
      id: 1,
      title: "My 1st Post",
      datetime: "Jan 2 2023, 21:33:48 PM",
      body: "Best 6 animes to watch on netflix 2023.",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "Mar 12 2021, 1:10:34 AM",
      body: "Jio AirFibre is now available in 8 cities.",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "Jul 25 2022, 5:40:03 AM",
      body: "Galaxy S23 FE review: Signature Samsung experience at non-flagship price.",
    },
    {
      id: 4,
      title: "My 4th Post",
      datetime: "Aug 16 2023, 13:23:55 PM",
      body: "Xiomi 14 series phones with HyperOs to launch on October.",
    },
  ]);

  const [search, setsearch] = useState("");
  const [searchresult, setsearchresult] = useState("");
  const [newtitle, setnewtitle] = useState("");
  const [newbody, setnewbody] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        ((post.title).toLowerCase().includes(search.toLowerCase())) ||
        (post.body.toLowerCase().includes(search.toLowerCase()))
    );

    setsearchresult(filteredResults.reverse())

  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMM dd, yyyy pp");
    const Newpost = { id, title: newtitle, datetime, body: newbody };
    const newfeedpost = [...posts, Newpost];
    setposts(newfeedpost);
    setnewtitle('');
    setnewbody('');
    navigate('/')
  }

  const handleDelete = (id) => {
    const PostUpdate = posts.filter(post => (post.id) !== id)
    setposts(PostUpdate)
    navigate('/')
  }

  return (
    <div className="App">
      <Header title="Social Media Application" />
      <Nav search={search} setsearch={setsearch} />

      <Routes>
        <Route path="/" element= {<Home posts={searchresult} />}/>
        <Route path="Posts">
          <Route index element={
            <NewPost
            newtitle={newtitle}
            setnewtitle={setnewtitle}
            newbody={newbody}
            setnewbody={setnewbody}
            handleSubmit={handleSubmit}
           />
          }/>
          <Route path=":id" element={<PostPage posts = {posts} handleDelete = {handleDelete}/>}/>
        </Route>
        <Route path="About" element={<About />}/>
        <Route path="*" element={<Missing />}/>
        
      </Routes>
     

      <Footer />
    </div>
  );
}

export default App;
