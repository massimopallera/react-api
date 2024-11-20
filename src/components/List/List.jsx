export default function List({arr}) {
  return (
    <div className="list">
      <ol>
        {arr.map((element, index) =>
          <li key={index}>
            <div className="list-item">
              <h3>{element.title}</h3>
              <p>{element.content}</p>
              <span>{element.tags}</span>
              <h4>{element.category}</h4>
            </div>


          </li>
        )}
      </ol>
    </div>
  )
}