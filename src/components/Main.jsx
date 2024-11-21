import { useState,useEffect } from 'react'

import List from './List/List'
import FormComponent from './Form/Form'


export default function Main() {

  const protocol = 'http:'
  const domain = `localhost:3000`
  const resourcePath = `${protocol}//${domain}/`
  const uri = `${protocol}//${domain}/posts`

  const [posts, setPosts] = useState([])

  // AJAX call
  function fetchData(url = "http://localhost:3000/posts") {
    fetch(url)
     .then(response => response.json())
     .then(data => setPosts(data.data))
  }


  function handleOverlay() { 
    document.querySelector('.overlay').classList.toggle('active')
  }

  useEffect(fetchData,[])

  return (
    <main>
      <div className="container">

        <button className='btn btn-light' popovertarget="offCanvas" onClick={handleOverlay} >Aggiungi Post</button>

        <div className="overlay">
          {/* FORM */}
          <FormComponent handleOverlay={handleOverlay} returnNewPosts={(newPosts) => setPosts(newPosts)} ></FormComponent>
        </div>

        {/* LIST */}
        {/* <List arr={posts} url={url} handleDelete={handleDelete} /> */}
        <div className="row row-cols-1 d-flex align-items-stretch g-5 my-3">

          {posts.map((post, index) => <List post={post} index={index} key={index} uri={uri} imgSrc={resourcePath} returnNewPosts={(newPosts) => setPosts(newPosts)}></List>)}
    </div>
          
      </div>
    </main>
  )
}