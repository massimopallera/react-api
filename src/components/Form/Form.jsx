
export default function Form({
  onSubmit, 
  children
}) {
  return (
    <form onSubmit={onSubmit}>

      {children}

      <div className='submit-button'>
        <button type="submit">Aggiungi nuovo articolo</button>
      </div>

    </form>
  )
}