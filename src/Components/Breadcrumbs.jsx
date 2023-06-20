const Breadcrumbs = ({ activeCategory, activeColumn, setActiveColumn, setActiveRowIndex }) => {
  const handleBreadcrumbClick = (index) => {
    setActiveColumn(index);
    if (index === null) {
      setActiveRowIndex(null);
    }
  };

  const colorStyle = (columnIndex) => ({
    color: activeColumn === columnIndex ? '#828FA3' : '#635fc7',
  });

  return (
    <div className="breadcrumbs">
      <span role="button" onClick={() => handleBreadcrumbClick(null)} style={colorStyle(0)}>
        Home
      </span>
      {activeCategory && (
        <span role="button" onClick={() => handleBreadcrumbClick(0)} style={colorStyle(1)}>
          / {activeCategory}
        </span>
      )}
      {activeColumn > 1 && (
        <span role="button" onClick={() => handleBreadcrumbClick(1)} style={colorStyle(2)}>
          / Number of Books
        </span>
      )}
      {activeColumn > 2 && (
        <span role="button" onClick={() => handleBreadcrumbClick(2)} style={colorStyle(3)}>
          / Books List
        </span>
      )}
      {activeColumn > 3 && (
        <span role="button" onClick={() => handleBreadcrumbClick(3)} style={colorStyle(4)}>
          / Book Details
        </span>
      )}
      {activeColumn > 4 && (
        <span role="button" onClick={() => handleBreadcrumbClick(4)} style={colorStyle(5)}>
          / Author Books
        </span>
      )}
    </div>
  );
};

export default Breadcrumbs;
