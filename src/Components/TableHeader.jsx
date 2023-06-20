const TableHeader = ({ activeColumnIndex }) => (
  <thead>
    <tr>
      <th>
        <p className="header-name">Category</p>
      </th>
      {activeColumnIndex > 0 && (
        <th>
          <p className="header-name">Books Num</p>
        </th>
      )}
      {activeColumnIndex > 1 && (
        <th>
          <p className="header-name">Books List</p>
        </th>
      )}
      {activeColumnIndex > 2 && (
        <th>
          <p className="header-name">Book Description</p>
        </th>
      )}
      {activeColumnIndex > 3 && (
        <th>
          <p className="header-name">Author Books</p>
        </th>
      )}
    </tr>
  </thead>
);

export default TableHeader;
