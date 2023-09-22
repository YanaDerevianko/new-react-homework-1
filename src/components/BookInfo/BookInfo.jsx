export const BookInfo = ({name, author, year}) => {
    return (
      <div className="component-wrapper component-wrapper-3">
        <h2 className="component-name">Component 'EventMessage'</h2>
        <p>'{name}'</p>
        <p>{author}</p>
        <p>{year}</p>
      </div>
    );
  };