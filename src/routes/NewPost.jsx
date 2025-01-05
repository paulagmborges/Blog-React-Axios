import'./NewPost.css'

function NewPost() {
  return (
    <div className="new Post">
      <h2>Inserir novo Post:</h2>
      <form action="">
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input 
          type="text"
          name="title"
          id="tilte"
          placeholder="Digite o título"
           />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" 
          id="body" 
          placeholder="Digite o conteúdo">
          </textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn"/>
      </form>

    </div>
  )
}

export default NewPost