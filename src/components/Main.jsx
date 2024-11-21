import { useState,useEffect } from 'react'

// import blogPosts from '../assets/db/posts.js'
// import tags from '../assets/db/tags.js'
// import categories from '../assets/db/categories.js'

import List from './List/List'
import Form from './Form/Form'
// import Input from './Input/Input';


export default function Main() {

  const url = "http://localhost:3000/"

  const [posts, setPosts] = useState([])
  const [tagsList, setTagsList] = useState([])
  const [categoriesList, setCategoriesList] = useState([])
  // const [filteredPosts, setFilteredPosts] = useState(posts.filter(post => post.published)) 
  const [formData, setFormData] = useState();

  // AJAX call
  function fetchData(url = "http://localhost:3000/posts") {
    fetch(url)
     .then(response => response.json())
     .then(data => setPosts(data.data))
  }

/*   //to handle all Form Data
  function handleFormData(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    // console.log(value)
    setFormData(
        {
          ...formData,
          [e.target.name]: value
        }
      )    
  }
  
  //to handle just tags checkboxes
  function handleFormTags(e) {
    const isChecked = e.target.checked
    const value = e.target.value

    if (!formData.tags.includes(value) && isChecked) {
      setFormData({
        ...formData,
        tags:[...formData.tags, value]
      })
    } else if (formData.tags.includes(value) && !isChecked) {
      const newTags = formData.tags.filter(tag => tag != value)
      setFormData({
        ...formData,
        tags: newTags
      })
    }
    // console.log(formTags);
    
  }
 */
  function handleDelete(slug) {
    const url = "http://localhost:3000/posts"
    const finalUrl = `${url}/${slug}`

    fetch(finalUrl, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
    .then(data => setPosts(data.data))

  }



  function handleOverlay() { 
    document.querySelector('.overlay').classList.toggle('active')
  }

/*   useEffect((url = "http://localhost:3000/tags") => {
    fetch(url,{method: 'GET'})
      .then(resp => resp.json())
      .then(data => setTagsList(data.tags))
    },[])
    
  useEffect((url = "http://localhost:3000/categories") => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setCategoriesList(data.categories))
    },[])
     */
  useEffect(fetchData,[])

  return (
    <main>
      <div className="container">

        <button className='btn btn-light' popovertarget="offCanvas" onClick={handleOverlay} >Aggiungi Post</button>

        <div className="overlay">
          {/* FORM */}
          <Form handleOverlay={handleOverlay} after={(newPosts) => setPosts(newPosts)} ></Form>

        </div>

        {/* LIST */}
        <List arr={posts} url={url} handleDelete={handleDelete}/>
      </div>
    </main>
  )
}