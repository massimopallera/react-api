export default function List({arr, url}) {
  return (
    <div className="row row-cols-1 d-flex align-items-stretch g-5">
        {arr.map((element, index) =>
          <div key={index} className="col align-self-stretch">
            <div className="card h-100 bg-dark text-white" >
              <div className="card-header text-center ">
                <h3>{element.title}</h3>
              </div>
              <div className="card-body">
                <p>{element.content}</p>
                <img src={url+element.image} alt="" />
              </div>
            </div>
          </div>
        )}
    </div>
  )
}