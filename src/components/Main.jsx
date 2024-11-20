import { useState,useEffect } from 'react'

// import blogPosts from '../assets/db/posts.js'
// import tags from '../assets/db/tags.js'
// import categories from '../assets/db/categories.js'

import List from './List/List'
import Form from './Form/Form'
import Input from './Input/Input';

const initialFormData = {
  title: '',
  content: '',
  category: '',
  tags: [],
  published: false
}

export default function Main() {

  const url = "http://localhost:3000/"

  const [posts, setPosts] = useState([])
  const [tagsList, setTagsList] = useState([])
  const [categoriesList, setCategoriesList] = useState([])
  // const [filteredPosts, setFilteredPosts] = useState(posts.filter(post => post.published)) 
  const [formData, setFormData] = useState(initialFormData);

  // AJAX call
  function fetchData(url = "http://localhost:3000/posts") {
    fetch(url)
     .then(response => response.json())
     .then(data => setPosts(data.data))
  }

  //to handle all Form Data
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

  // to handle form submit
  function handleSubmit(e) { 
    e.preventDefault()
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        title: formData.title,
        content: formData.content,
        category: formData.category,
        tags: formData.tags,
        published: formData.published,
      }])
    
    // setFilteredPosts(
    //   posts.filter(post => post.published)
    // )
    
    setFormData(initialFormData)
    // console.log(posts);
  }

  function handleOverlay() { 
    document.querySelector('.overlay').classList.toggle('active')
  }

  useEffect((url = "http://localhost:3000/tags") => {
    fetch(url,{method: 'GET'})
      .then(resp => resp.json())
      .then(data => setTagsList(data.tags))
    },[])
    
  useEffect((url = "http://localhost:3000/categories") => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setCategoriesList(data.categories))
    },[])
    
  useEffect(fetchData,[])

  return (
    <main>
      <div className="container">

        <button className='btn btn-light' popovertarget="offCanvas" onClick={handleOverlay} >Aggiungi Post</button>

        <div className="overlay">
          {/* FORM */}
          <Form onSubmit={handleSubmit} id={"offCanvas"} handleOverlay={handleOverlay}>

            {/* TITLE INPUT */}
            <Input
              type={'text'}
              title={"Titolo"}
              placeholder={"Inserisci il titolo"}
              id='newFormData-title'
              name="title"
              value={formData.title}
              onChange={handleFormData}
            />

            {/* CONTENT INPUT */}
            <Input
              type={'text'}
              title={"Contenuto"}
              placeholder={"Inserisci il contenuto"}
              id='newFormData-content'
              value={formData.content}
              onChange={handleFormData}
              name="content"
            />

            {/* CATEGORY SELECT */}
            <select name="category" id="category" value={formData.category} onChange={handleFormData}>
              {categoriesList.map((cat, index) =>
                <option key={index} value={cat}>{cat}</option>
              )}
            </select>


            {/* TAGS CHECKBOXS */}
            <div className="tags">
              {tagsList.map((tag,index) => 
                <div className="form-check" key={index} >
                  <input
                    type="checkbox"
                    id={tag}
                    name={tag}
                    value={tag}
                    onChange={handleFormTags}
                  />

                  <label htmlFor={tag}>{tag}</label>
                </div>
              )}
            </div>

            <div className="state">
              <input type="checkbox" name="published" id="" onChange={handleFormData}/>
              <label htmlFor="public">Pubblica</label>
            </div>


          </Form>

        </div>

        {/* LIST */}
        <List arr={posts} url={url}/>
      </div>
    </main>
  )
}