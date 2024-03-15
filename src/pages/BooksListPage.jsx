import { useState, useEffect } from 'react';
import BookList from '../components/BookList';

export default function BooksListPage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = async () => {
    try {
      const response = await fetch('https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json');
      if (!response.ok) {
        throw new Error('Failed');
      }
      const data = await response.json();

      const booksArray = Object.values(data);
      
      setBooks(booksArray);
    } catch (error) {
    }
  };
  return (
    <div>
      <h2>Books List</h2>
      <BookList books={books} />
    </div>
  )
}