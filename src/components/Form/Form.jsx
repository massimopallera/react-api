
export default function Form({
  onSubmit, 
  id,
  children
}) {
  return (
    <form onSubmit={onSubmit} id={id} >

      {children}

      <div className='submit-button'>
        <button type="submit">Aggiungi nuovo articolo</button>
      </div>

    </form>
  )
}