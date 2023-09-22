import films from "../../data/films.json";
import "./MovieDirectorList.css";

export const MovieDirectorList = () => {
  return (
    <div className="component-wrapper component-wrapper-3">
      <h2 className="component-name">Component 'MovieDirectorList'</h2>
      <h3 className="film-header">New films!</h3>
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <p className="film-title"> Name: '{film.title}'</p>
            <p className="film-director">Director: {film.director}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};