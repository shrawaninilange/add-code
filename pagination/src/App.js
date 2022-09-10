 
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Route,Routes} from "react-router-dom"
import Post from './Components/Post';
import Pagination from './Components/Pagination';
import Promis from './Components/Promis';
function App() {
 
  const [post ,setpost] =useState([])
  // const [loading ,setloading] =useState(false)
  const [currentpage ,setcurrentpage] =useState(1)
  const [ postperPage ] = useState(3)
  
const get = async ()=>{
  
     const res= await  axios.get("https://api.github.com/users")
  setpost(res.data)
 
}

useEffect(()=>{
  get()
},[])
 

const indexofLastPost= currentpage*postperPage
const indexOfFirstPost = indexofLastPost-postperPage
const currentPost = post.slice(indexOfFirstPost,indexofLastPost)
const paginate=(pageNumber)=> setcurrentpage(pageNumber)
 console.log(paginate)

  return (
    <div className="App">
      <Post post={currentPost} />

      <Pagination postperPage={postperPage} totalpost={post.length} paginate={paginate}/>
      <Routes>
        <Route path='/post' element={<Pagination/>}/> 
      </Routes>
       
      <Promis/>
    </div>
  );
}

export default App;
