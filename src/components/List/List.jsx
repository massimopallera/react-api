export default function List({arr, url, handleDelete}) {
  return (
    <div className="row row-cols-1 d-flex align-items-stretch g-5 my-3">
        {arr.map((element, index) =>
          <div key={index} className="col align-self-stretch">
            <div className="card h-100 bg-dark text-white" >
              <div className="card-header text-center ">
                <h3>{element.title}</h3>
              </div>
              <div className="card-body d-flex flex-wrap">
                <p>{element.content}</p>
                <div className="w-100 d-flex justify-content-between align-items-center">
                  <img src={url + element.image} alt="" />
                  <button className="btn btn-danger align-self-end" onClick={handleDelete}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}