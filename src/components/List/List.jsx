export default function List({post, index, url, handleDelete, returnNewPosts}) {
  
  function handleDelete(slug) {
    const url = "http://localhost:3000/posts"
    const finalUrl = `${url}/${slug}`

    fetch(finalUrl, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
    .then(data => returnNewPosts(data.data))

  }

  
  return (
    <div key={index} className="col align-self-stretch">
      <div className="card h-100 bg-dark text-white" >
  
        <div className="card-header text-center ">
          <h3>{post.title}</h3>
        </div>
  
        <div className="card-body d-flex flex-wrap">
          <p>{post.content}</p>

          <div className="w-100 d-flex felx-wrap justify-content-between align-items-center">
            <img src={url + post.image} alt="" />
            <button type="button" className="btn btn-danger align-self-end" onClick={() => handleDelete(post.slug)}>Delete</button>
          </div>
        </div>
      
      </div>
    </div>
  )
}