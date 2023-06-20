import Breadcrumbs from './Breadcrumbs';
import LogoSection from './LogoSection';
import TableHeader from './TableHeader';
import CategoryRow from './CategoryRow';

import { useState } from 'react';
import { fetchBooksByCategory, fetchBooksByAuthor } from '../Services/BooksServices';

const categories = ['Drama', 'Horror', 'Comedy', 'Fantasy', 'Biography', 'Romance', 'History', 'Mystery'];

const BooksTable = () => {
  const [activeRowIndex, setActiveRowIndex] = useState(null);
  const [activeColumnIndex, setActiveColumnIndex] = useState(0);
  const [booksTitles, setBooksTitles] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [authorBooks, setAuthorBooks] = useState([]);

  const handleRowClick = async (index, column, category, book, author) => {
    setActiveRowIndex(index);
    setActiveColumnIndex(column);
    if (column === 1) {
      const fetchedBooks = await fetchBooksByCategory(category);
      setBooksTitles(fetchedBooks);
    } else if (column === 3) {
      setSelectedBook(book);
    } else if (column === 4) {
      const fetchedBooks = await fetchBooksByAuthor(author);
      setAuthorBooks(fetchedBooks);
    }
  };

  return (
    <div className="table">
      <LogoSection />
      <Breadcrumbs activeCategory={categories[activeRowIndex]} activeColumn={activeColumnIndex + 1} setActiveColumn={setActiveColumnIndex} setActiveRowIndex={setActiveRowIndex} />

      <table>
        <TableHeader activeColumnIndex={activeColumnIndex} />
        <tbody>
          {categories.map((category, index) => (
            <CategoryRow
              category={category}
              index={index}
              activeRowIndex={activeRowIndex}
              activeColumnIndex={activeColumnIndex}
              onRowClick={handleRowClick}
              booksTitles={booksTitles}
              selectedBook={selectedBook}
              authorBooks={authorBooks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
