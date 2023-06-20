const CategoryRow = ({ category, index, activeRowIndex, activeColumnIndex, onRowClick, booksTitles, selectedBook, authorBooks }) => (
  <tr key={index} style={{ backgroundColor: activeRowIndex === index ? '#E4E3EE' : 'transparent' }}>
    <td>
      <p className="category" onClick={() => onRowClick(index, 1, category)}>
        {category}
      </p>
    </td>
    {activeRowIndex === index && activeColumnIndex > 0 && (
      <td>
        <p className="books-number" onClick={() => onRowClick(index, 2)}>
          {booksTitles.length}
        </p>
      </td>
    )}
    {activeRowIndex === index && activeColumnIndex > 1 && (
      <td>
        <div className="books-list">
          {booksTitles.map((book, bookIndex) => (
            <div key={bookIndex}>
              <p onClick={() => onRowClick(index, 3, null, book)} className="book-title">
                {book.volumeInfo.title}
              </p>
            </div>
          ))}
        </div>
      </td>
    )}
    {activeRowIndex === index && activeColumnIndex > 2 && (
      <td>
        <div className="book-description">
          <p>{selectedBook?.volumeInfo?.description}</p>
        </div>
        <div>
          Author:{' '}
          <p onClick={() => onRowClick(index, 4, null, null, selectedBook?.volumeInfo?.authors[0])} className="book-author">
            {selectedBook?.volumeInfo?.authors[0]}
          </p>
        </div>
      </td>
    )}
    {activeRowIndex === index && activeColumnIndex > 3 && (
      <td>
        <div className="books-list">
          {authorBooks.map((book, index) => (
            <div key={index}>
              <p className="book-title">{book.volumeInfo.title}</p>
            </div>
          ))}
        </div>
      </td>
    )}
  </tr>
);

export default CategoryRow;
