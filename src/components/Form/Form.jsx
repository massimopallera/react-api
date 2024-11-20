
export default function Form({
  onSubmit, 
  id,
  handleOverlay,
  children
}) {
  return (
    <form
      className="form-control bg-dark text-white py-3 px-5"
      onSubmit={onSubmit} id={id} >

      {children}

      <div className='d-flex justify-content-center gap-5 my-4'>
        <button className="btn btn-primary" type="submit">Aggiungi nuovo articolo</button>

        <button
          type="button"
          className='btn btn-light'
          popovertarget="offCanvas"
          onClick={handleOverlay} 
          popoveraction="hide"
        >
          Chiudi
        </button>
      </div>

    </form>
  )
}