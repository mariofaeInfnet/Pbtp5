function CardBook({ book }) {
  return (
    <div className="card">
      <h4>{book.title}</h4>
      <p>Autor: {book.author}</p>
      <p>Genero: {book.genre}</p>
      <p>Ano: {book.publication_year}</p>
    </div>
  )
}

export default function BookList({ books })  {
  return  (
    <div className="book-list">
      { books.map((book) => 
        <CardBook book={book} />
      )}
    </div>
  )
}